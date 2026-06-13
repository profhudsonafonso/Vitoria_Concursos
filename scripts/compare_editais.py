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

    assuntos_by_id = {
        row["assunto_id"]: row
        for row in assuntos
    }

    cargos_by_id = {
        row["cargo_id"]: row
        for row in cargos
    }

    return cargos_by_id, assuntos_by_id, conteudos


def get_subjects_for_cargo(cargo_id, assuntos_by_id, conteudos):
    subjects = {}

    for row in conteudos:
        if row["cargo_id"] != cargo_id:
            continue

        assunto_id = row["assunto_id"]
        assunto = assuntos_by_id.get(assunto_id)

        if not assunto:
            continue

        normalized = assunto["texto_normalizado"].strip().lower()

        if normalized:
            subjects[normalized] = {
                "assunto_id": assunto_id,
                "texto_original": assunto["texto_original"],
                "texto_normalizado": assunto["texto_normalizado"],
                "disciplina_id": assunto["disciplina_id"],
                "status_revisao": assunto.get("status_revisao", ""),
            }

    return subjects


def classify_similarity(similarity):
    if similarity >= 70:
        return "Alto"
    if similarity >= 40:
        return "Medio"
    return "Baixo"


def compare_cargos(cargo_a_id, cargo_b_id):
    cargos_by_id, assuntos_by_id, conteudos = load_data()

    if cargo_a_id not in cargos_by_id:
        raise ValueError(f"Cargo A nao encontrado: {cargo_a_id}")

    if cargo_b_id not in cargos_by_id:
        raise ValueError(f"Cargo B nao encontrado: {cargo_b_id}")

    cargo_a = cargos_by_id[cargo_a_id]
    cargo_b = cargos_by_id[cargo_b_id]

    subjects_a = get_subjects_for_cargo(cargo_a_id, assuntos_by_id, conteudos)
    subjects_b = get_subjects_for_cargo(cargo_b_id, assuntos_by_id, conteudos)

    keys_a = set(subjects_a.keys())
    keys_b = set(subjects_b.keys())

    common = keys_a & keys_b
    only_a = keys_a - keys_b
    only_b = keys_b - keys_a
    total_unique = keys_a | keys_b

    similarity = (len(common) / len(total_unique) * 100) if total_unique else 0
    level = classify_similarity(similarity)

    print("=" * 70)
    print("Comparacao de cargos")
    print("=" * 70)

    print(f"Cargo A: {cargo_a['nome_cargo']} ({cargo_a_id})")
    print(f"Cargo B: {cargo_b['nome_cargo']} ({cargo_b_id})")
    print()

    print("Resumo")
    print("-" * 70)
    print(f"Assuntos do cargo A: {len(keys_a)}")
    print(f"Assuntos do cargo B: {len(keys_b)}")
    print(f"Assuntos em comum: {len(common)}")
    print(f"Total de assuntos unicos: {len(total_unique)}")
    print(f"Similaridade: {similarity:.2f}%")
    print(f"Nivel de aproveitamento: {level}")
    print()

    print("Assuntos em comum")
    print("-" * 70)
    if common:
        for subject in sorted(common):
            print(f"- {subjects_a[subject]['texto_normalizado']}")
    else:
        print("Nenhum assunto em comum encontrado.")
    print()

    print(f"Assuntos exclusivos de {cargo_a['nome_cargo']}")
    print("-" * 70)
    if only_a:
        for subject in sorted(only_a):
            print(f"- {subjects_a[subject]['texto_normalizado']}")
    else:
        print("Nenhum assunto exclusivo encontrado.")
    print()

    print(f"Assuntos exclusivos de {cargo_b['nome_cargo']}")
    print("-" * 70)
    if only_b:
        for subject in sorted(only_b):
            print(f"- {subjects_b[subject]['texto_normalizado']}")
    else:
        print("Nenhum assunto exclusivo encontrado.")
    print()

    return {
        "cargo_a_id": cargo_a_id,
        "cargo_b_id": cargo_b_id,
        "assuntos_a": len(keys_a),
        "assuntos_b": len(keys_b),
        "assuntos_em_comum": len(common),
        "total_assuntos_unicos": len(total_unique),
        "similaridade_percentual": round(similarity, 2),
        "nivel_aproveitamento": level,
    }


def list_cargos():
    cargos_by_id, _, _ = load_data()

    print("Cargos disponiveis")
    print("-" * 70)

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
        description="Comparar conteudos programaticos entre cargos."
    )

    parser.add_argument(
        "--list-cargos",
        action="store_true",
        help="Lista os cargos disponiveis na base."
    )

    parser.add_argument(
        "--cargo-a",
        help="ID do primeiro cargo."
    )

    parser.add_argument(
        "--cargo-b",
        help="ID do segundo cargo."
    )

    args = parser.parse_args()

    if args.list_cargos:
        list_cargos()
        return

    if not args.cargo_a or not args.cargo_b:
        print("Uso:")
        print("  python scripts/compare_editais.py --list-cargos")
        print("  python scripts/compare_editais.py --cargo-a cargo_001 --cargo-b cargo_002")
        return

    compare_cargos(args.cargo_a, args.cargo_b)


if __name__ == "__main__":
    main()
