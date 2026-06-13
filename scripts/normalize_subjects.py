import argparse
import csv
from collections import defaultdict
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT_DIR / "data"
OUTPUT_DIR = DATA_DIR / "normalized_subjects"


def read_csv(path):
    with open(path, newline="", encoding="utf-8-sig") as file:
        return list(csv.DictReader(file))


def write_csv(path, rows, fieldnames):
    path.parent.mkdir(parents=True, exist_ok=True)

    with open(path, "w", newline="", encoding="utf-8") as file:
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def normalize_text(text):
    if not text:
        return ""

    value = text.strip().lower()

    replacements = {
        "língua": "lingua",
        "raciocínio": "raciocinio",
        "lógico": "logico",
        "administração": "administracao",
        "pública": "publica",
        "informática": "informatica",
        "básica": "basica",
        "interpretação": "interpretacao",
        "compreensão": "compreensao",
        "textos": "texto",
    }

    for old, new in replacements.items():
        value = value.replace(old, new)

    value = " ".join(value.split())
    return value


def build_normalization_report():
    assuntos_path = DATA_DIR / "assuntos.csv"
    assuntos = read_csv(assuntos_path)

    groups = defaultdict(list)

    for row in assuntos:
        normalized = row.get("texto_normalizado", "").strip()

        if not normalized:
            normalized = normalize_text(row.get("texto_original", ""))

        key = normalize_text(normalized)
        groups[key].append(row)

    summary_rows = []
    equivalence_rows = []
    review_rows = []

    for key, rows in sorted(groups.items()):
        normalized_label = rows[0].get("texto_normalizado", "").strip() or key
        original_values = sorted({
            row.get("texto_original", "").strip()
            for row in rows
            if row.get("texto_original", "").strip()
        })

        summary_rows.append({
            "normalized_key": key,
            "texto_normalizado": normalized_label,
            "total_variants": len(original_values),
            "total_rows": len(rows),
            "variants": " | ".join(original_values),
        })

        if len(original_values) > 1 or len(rows) > 1:
            for row in rows:
                equivalence_rows.append({
                    "normalized_key": key,
                    "assunto_id": row.get("assunto_id", ""),
                    "disciplina_id": row.get("disciplina_id", ""),
                    "texto_original": row.get("texto_original", ""),
                    "texto_normalizado": row.get("texto_normalizado", ""),
                    "status_revisao": row.get("status_revisao", ""),
                    "observacoes": row.get("observacoes", ""),
                })

        needs_review = (
            len(original_values) > 1
            or any(row.get("status_revisao", "") == "pendente" for row in rows)
        )

        if needs_review:
            review_rows.append({
                "normalized_key": key,
                "texto_normalizado": normalized_label,
                "reason": "multiple_variants_or_pending_review",
                "total_variants": len(original_values),
                "variants": " | ".join(original_values),
                "suggested_action": "Revisar se os assuntos devem mesmo ser agrupados.",
            })

    write_csv(
        OUTPUT_DIR / "normalized_subjects_summary.csv",
        summary_rows,
        [
            "normalized_key",
            "texto_normalizado",
            "total_variants",
            "total_rows",
            "variants",
        ],
    )

    write_csv(
        OUTPUT_DIR / "subject_equivalence_candidates.csv",
        equivalence_rows,
        [
            "normalized_key",
            "assunto_id",
            "disciplina_id",
            "texto_original",
            "texto_normalizado",
            "status_revisao",
            "observacoes",
        ],
    )

    write_csv(
        OUTPUT_DIR / "subjects_to_review.csv",
        review_rows,
        [
            "normalized_key",
            "texto_normalizado",
            "reason",
            "total_variants",
            "variants",
            "suggested_action",
        ],
    )

    print("Normalization report generated.")
    print(f"Input subjects: {len(assuntos)}")
    print(f"Normalized groups: {len(summary_rows)}")
    print(f"Equivalence candidate rows: {len(equivalence_rows)}")
    print(f"Review rows: {len(review_rows)}")
    print()
    print(f"Generated: {OUTPUT_DIR / 'normalized_subjects_summary.csv'}")
    print(f"Generated: {OUTPUT_DIR / 'subject_equivalence_candidates.csv'}")
    print(f"Generated: {OUTPUT_DIR / 'subjects_to_review.csv'}")


def main():
    parser = argparse.ArgumentParser(
        description="Generate subject normalization and equivalence reports."
    )

    parser.add_argument(
        "--report",
        action="store_true",
        help="Generate normalization reports from data/assuntos.csv.",
    )

    args = parser.parse_args()

    if args.report:
        build_normalization_report()
        return

    print("Uso:")
    print("  python scripts/normalize_subjects.py --report")


if __name__ == "__main__":
    main()
