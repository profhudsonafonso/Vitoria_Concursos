import csv
from pathlib import Path

"""
Script simples para comparar dois arquivos CSV de assuntos.

Formato esperado dos arquivos:
assunto

Exemplo:
assunto
Língua Portuguesa
Direito Administrativo
Atos administrativos
Informática básica

Uso:
python scripts/compare_editais.py edital_a.csv edital_b.csv
"""


def read_subjects(path):
    subjects = set()
    with open(path, newline="", encoding="utf-8") as file:
        reader = csv.DictReader(file)
        for row in reader:
            subject = row.get("assunto", "").strip().lower()
            if subject:
                subjects.add(subject)
    return subjects


def main():
    import sys

    if len(sys.argv) != 3:
        print("Uso: python scripts/compare_editais.py edital_a.csv edital_b.csv")
        return

    file_a = Path(sys.argv[1])
    file_b = Path(sys.argv[2])

    subjects_a = read_subjects(file_a)
    subjects_b = read_subjects(file_b)

    common = subjects_a & subjects_b
    only_a = subjects_a - subjects_b
    only_b = subjects_b - subjects_a

    total_unique = len(subjects_a | subjects_b)
    similarity = (len(common) / total_unique * 100) if total_unique else 0

    print("=== Comparação de Editais ===")
    print(f"Assuntos no edital A: {len(subjects_a)}")
    print(f"Assuntos no edital B: {len(subjects_b)}")
    print(f"Assuntos em comum: {len(common)}")
    print(f"Similaridade: {similarity:.2f}%")

    print("\n=== Assuntos em comum ===")
    for subject in sorted(common):
        print(f"- {subject}")

    print("\n=== Apenas no edital A ===")
    for subject in sorted(only_a):
        print(f"- {subject}")

    print("\n=== Apenas no edital B ===")
    for subject in sorted(only_b):
        print(f"- {subject}")


if __name__ == "__main__":
    main()
