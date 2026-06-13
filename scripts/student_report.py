import argparse
import csv
from pathlib import Path


DATA_DIR = Path(__file__).resolve().parents[1] / "data"


def read_csv(path):
    with open(path, newline="", encoding="utf-8-sig") as file:
        return list(csv.DictReader(file))


def load_data():
    cargos = read_csv(DATA_DIR / "cargos.csv")
    assuntos = read_csv(DATA_DIR / "assuntos.csv")
    conteudos = read_csv(DATA_DIR / "conteudos_cargo.csv")
    progresso = read_csv(DATA_DIR / "progresso_usuario_modelo.csv")

    cargos_by_id = {
        row["cargo_id"]: row
        for row in cargos
    }

    assuntos_by_id = {
        row["assunto_id"]: row
        for row in assuntos
    }

    return cargos_by_id, assuntos_by_id, conteudos, progresso


def get_subjects_for_cargo(cargo_id, assuntos_by_id, conteudos):
    subjects = []

    for row in conteudos:
        if row["cargo_id"] != cargo_id:
            continue

        assunto_id = row["assunto_id"]
        assunto = assuntos_by_id.get(assunto_id)

        if not assunto:
            continue

        subjects.append({
            "assunto_id": assunto_id,
            "disciplina_id": assunto.get("disciplina_id", ""),
            "texto_original": assunto.get("texto_original", ""),
            "texto_normalizado": assunto.get("texto_normalizado", ""),
            "status_revisao": assunto.get("status_revisao", ""),
        })

    return subjects


def get_progress_for_user(usuario_id, progresso):
    progress_by_subject = {}

    for row in progresso:
        if row["usuario_id"] != usuario_id:
            continue

        progress_by_subject[row["assunto_id"]] = {
            "status": row.get("status", "nao_estudado"),
            "data_atualizacao": row.get("data_atualizacao", ""),
            "observacoes": row.get("observacoes", ""),
        }

    return progress_by_subject


def status_label(status):
    labels = {
        "nao_estudado": "Nao estudado",
        "estudando": "Estudando",
        "estudado": "Estudado",
        "revisar": "Revisar",
        "dificuldade": "Tenho dificuldade",
    }

    return labels.get(status, status)


def generate_report(usuario_id, cargo_id):
    cargos_by_id, assuntos_by_id, conteudos, progresso = load_data()

    if cargo_id not in cargos_by_id:
        raise ValueError(f"Cargo nao encontrado: {cargo_id}")

    cargo = cargos_by_id[cargo_id]
    subjects = get_subjects_for_cargo(cargo_id, assuntos_by_id, conteudos)
    progress_by_subject = get_progress_for_user(usuario_id, progresso)

    total_subjects = len(subjects)

    studied = []
    studying = []
    pending = []
    review = []
    difficulty = []

    for subject in subjects:
        assunto_id = subject["assunto_id"]
        progress = progress_by_subject.get(assunto_id, {})
        status = progress.get("status", "nao_estudado")

        item = {
            **subject,
            "status": status,
            "status_label": status_label(status),
            "observacoes": progress.get("observacoes", ""),
        }

        if status == "estudado":
            studied.append(item)
        elif status == "estudando":
            studying.append(item)
        elif status == "revisar":
            review.append(item)
        elif status == "dificuldade":
            difficulty.append(item)
        else:
            pending.append(item)

    studied_percent = (len(studied) / total_subjects * 100) if total_subjects else 0
    in_progress_percent = ((len(studied) + len(studying)) / total_subjects * 100) if total_subjects else 0

    print("=" * 72)
    print("Relatorio de estudo")
    print("=" * 72)
    print(f"Usuario: {usuario_id}")
    print(f"Cargo: {cargo['nome_cargo']} ({cargo_id})")
    print(f"Area: {cargo.get('area', '')}")
    print(f"Escolaridade: {cargo.get('escolaridade', '')}")
    print()

    print("Resumo")
    print("-" * 72)
    print(f"Total de assuntos: {total_subjects}")
    print(f"Estudados: {len(studied)}")
    print(f"Estudando: {len(studying)}")
    print(f"Pendentes: {len(pending)}")
    print(f"Para revisar: {len(review)}")
    print(f"Com dificuldade: {len(difficulty)}")
    print(f"Percentual estudado: {studied_percent:.2f}%")
    print(f"Percentual estudado ou em andamento: {in_progress_percent:.2f}%")
    print()

    print_section("Assuntos estudados", studied)
    print_section("Assuntos em andamento", studying)
    print_section("Assuntos pendentes", pending)
    print_section("Assuntos para revisar", review)
    print_section("Assuntos com dificuldade", difficulty)

    print("Recomendacao simples")
    print("-" * 72)

    if total_subjects == 0:
        print("Nenhum assunto cadastrado para este cargo.")
    elif studied_percent >= 80:
        print("Boa cobertura. Priorize revisao, simulados e pontos de dificuldade.")
    elif studied_percent >= 50:
        print("Cobertura intermediaria. Continue os pendentes e reserve tempo para revisao.")
    else:
        print("Cobertura inicial. Priorize os assuntos pendentes e mantenha revisoes curtas.")

    print()

    return {
        "usuario_id": usuario_id,
        "cargo_id": cargo_id,
        "total_subjects": total_subjects,
        "studied": len(studied),
        "studying": len(studying),
        "pending": len(pending),
        "review": len(review),
        "difficulty": len(difficulty),
        "studied_percent": round(studied_percent, 2),
        "in_progress_percent": round(in_progress_percent, 2),
    }


def print_section(title, items):
    print(title)
    print("-" * 72)

    if not items:
        print("Nenhum item.")
        print()
        return

    for item in items:
        print(f"- {item['texto_normalizado']} ({item['status_label']})")

    print()


def list_users():
    _, _, _, progresso = load_data()
    users = sorted({row["usuario_id"] for row in progresso})

    print("Usuarios disponiveis")
    print("-" * 72)

    for user in users:
        print(f"- {user}")


def list_cargos():
    cargos_by_id, _, _, _ = load_data()

    print("Cargos disponiveis")
    print("-" * 72)

    for cargo_id, cargo in sorted(cargos_by_id.items()):
        print(
            f"{cargo_id} | "
            f"{cargo['nome_cargo']} | "
            f"{cargo['area']} | "
            f"{cargo['escolaridade']} | "
            f"edital={cargo['edital_id']}"
        )


def main():
    parser = argparse.ArgumentParser(
        description="Generate a student study progress report."
    )

    parser.add_argument(
        "--list-users",
        action="store_true",
        help="Lista usuarios disponiveis no arquivo de progresso.",
    )

    parser.add_argument(
        "--list-cargos",
        action="store_true",
        help="Lista cargos disponiveis.",
    )

    parser.add_argument(
        "--usuario-id",
        help="ID do usuario.",
    )

    parser.add_argument(
        "--cargo-id",
        help="ID do cargo.",
    )

    args = parser.parse_args()

    if args.list_users:
        list_users()
        return

    if args.list_cargos:
        list_cargos()
        return

    if not args.usuario_id or not args.cargo_id:
        print("Uso:")
        print("  python scripts/student_report.py --list-users")
        print("  python scripts/student_report.py --list-cargos")
        print("  python scripts/student_report.py --usuario-id usuario_001 --cargo-id cargo_001")
        return

    generate_report(args.usuario_id, args.cargo_id)


if __name__ == "__main__":
    main()
