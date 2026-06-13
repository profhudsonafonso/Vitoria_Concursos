# Briefing do MVP — Vitória Concursos

## 1. Objetivo do MVP

Criar uma primeira versão funcional e visual da plataforma Vitória Concursos para demonstrar como estudantes de concurso público podem comparar editais, identificar conteúdos em comum e organizar melhor seus estudos.

O MVP inicial deve validar o valor principal da solução:

**mostrar ao estudante o que se repete entre editais, o que é novo e quanto da preparação atual pode ser aproveitada em outro concurso.**

---

## 2. Estado atual do projeto

O projeto já possui uma estrutura inicial organizada no GitHub.

Arquivos e pastas já criados:

| Arquivo ou pasta | Função |
|---|---|
| README.md | Visão geral do projeto |
| proposal/proposta_completa.md | Proposta completa do projeto |
| proposal/textos_plataforma.md | Textos curtos para edital, pitch e MVP |
| mvp/briefing_mvp.md | Briefing do MVP |
| mvp/requisitos_mvp.md | Requisitos funcionais e técnicos do MVP |
| docs/arquitetura.md | Arquitetura inicial do sistema |
| docs/modelo_dados.md | Modelo de dados inicial |
| docs/fontes_dados.md | Fontes oficiais e auxiliares de dados |
| data/editais.csv | Modelo inicial de editais |
| data/cargos.csv | Modelo inicial de cargos |
| data/disciplinas.csv | Modelo inicial de disciplinas |
| data/assuntos.csv | Modelo inicial de assuntos |
| data/conteudos_cargo.csv | Relação entre cargos e assuntos |
| data/fontes.csv | Catálogo inicial de fontes |
| data/progresso_usuario_modelo.csv | Modelo de progresso do estudante |
| data/comparacoes_modelo.csv | Modelo de resultado de comparação |
| scripts/compare_editais.py | Script para comparar cargos |
| scripts/normalize_subjects.py | Script para normalizar assuntos |
| scripts/student_report.py | Script para relatório de estudo |
| management/github_project_tasks.csv | Lista inicial de tarefas do Kanban |

---

## 3. Escopo do MVP

O MVP inicial deve ser simples, mas precisa demonstrar o funcionamento principal da solução.

Funcionalidades mínimas:

- listar editais cadastrados;
- listar cargos disponíveis;
- filtrar editais por área, cargo, banca, estado e ano;
- visualizar conteúdo programático por cargo;
- comparar dois cargos ou editais;
- mostrar conteúdos em comum;
- mostrar conteúdos exclusivos;
- calcular percentual de similaridade;
- permitir marcar assuntos estudados;
- gerar relatório simples de aproveitamento.

---

## 4. Área piloto sugerida

Para reduzir o escopo, o MVP deve começar com uma área específica.

Opções recomendadas:

- área administrativa;
- técnico administrativo;
- assistente em administração;
- concursos de universidades e institutos federais;
- concursos municipais;
- concursos de tribunais.

A área piloto deve permitir comparação entre editais com conteúdos semelhantes.

---

## 5. Base de dados inicial

A primeira base do MVP será formada por arquivos CSV.

Arquivos principais:

| Arquivo | Descrição |
|---|---|
| data/editais.csv | Dados gerais dos editais |
| data/cargos.csv | Cargos vinculados aos editais |
| data/disciplinas.csv | Disciplinas dos conteúdos |
| data/assuntos.csv | Assuntos originais e normalizados |
| data/conteudos_cargo.csv | Ligação entre cargo e assunto |
| data/progresso_usuario_modelo.csv | Progresso de estudo do usuário |
| data/comparacoes_modelo.csv | Resultado de comparação entre cargos |
| data/fontes.csv | Fontes oficiais e auxiliares |

Na primeira versão, os dados podem ser cadastrados manualmente ou semi-automaticamente.

---

## 6. Scripts já previstos para o MVP

O MVP já possui três scripts principais de apoio.

### 6.1 Comparação entre cargos

Arquivo:

    scripts/compare_editais.py

Função:

- listar cargos disponíveis;
- comparar dois cargos;
- calcular assuntos em comum;
- calcular assuntos exclusivos;
- calcular similaridade;
- classificar aproveitamento como baixo, médio ou alto.

Exemplo de uso:

    python scripts\compare_editais.py --list-cargos

    python scripts\compare_editais.py --cargo-a cargo_001 --cargo-b cargo_002

---

### 6.2 Normalização de assuntos

Arquivo:

    scripts/normalize_subjects.py

Função:

- ler data/assuntos.csv;
- agrupar assuntos pelo texto normalizado;
- identificar possíveis equivalências;
- gerar arquivos de revisão em data/normalized_subjects/.

Exemplo de uso:

    python scripts\normalize_subjects.py --report

Arquivos gerados:

| Arquivo | Função |
|---|---|
| data/normalized_subjects/normalized_subjects_summary.csv | Resumo dos grupos normalizados |
| data/normalized_subjects/subject_equivalence_candidates.csv | Candidatos a equivalência |
| data/normalized_subjects/subjects_to_review.csv | Assuntos que precisam de revisão |

---

### 6.3 Relatório do estudante

Arquivo:

    scripts/student_report.py

Função:

- listar usuários de exemplo;
- listar cargos;
- cruzar cargo com progresso do estudante;
- calcular percentual estudado;
- listar assuntos pendentes;
- listar assuntos para revisão;
- gerar recomendação simples.

Exemplo de uso:

    python scripts\student_report.py --list-users

    python scripts\student_report.py --list-cargos

    python scripts\student_report.py --usuario-id usuario_001 --cargo-id cargo_001

---

## 7. Telas mínimas do MVP

### Tela 1 — Página inicial

Objetivo: explicar rapidamente a proposta de valor.

Elementos:

- título;
- subtítulo;
- botão para comparar editais;
- botão para ver concursos disponíveis;
- explicação curta do problema;
- explicação curta da solução.

Texto sugerido:

    Compare editais e estude com mais estratégia.

    O Vitória Concursos mostra conteúdos em comum, assuntos novos e o aproveitamento da sua preparação entre diferentes concursos públicos.

---

### Tela 2 — Lista de editais

Objetivo: mostrar os editais cadastrados.

Elementos:

- busca por nome;
- filtro por área;
- filtro por cargo;
- filtro por banca;
- filtro por estado;
- filtro por ano;
- card de edital;
- botão para ver detalhes;
- botão para comparar.

Fonte de dados:

    data/editais.csv
    data/cargos.csv

---

### Tela 3 — Detalhe do edital

Objetivo: mostrar os dados estruturados de um edital.

Elementos:

- nome do concurso;
- órgão;
- banca;
- esfera;
- estado;
- município;
- ano;
- data de publicação;
- data da prova;
- cargos;
- salário;
- escolaridade;
- disciplinas;
- assuntos;
- link da fonte oficial.

Fonte de dados:

    data/editais.csv
    data/cargos.csv
    data/disciplinas.csv
    data/assuntos.csv
    data/conteudos_cargo.csv

---

### Tela 4 — Comparação de cargos ou editais

Objetivo: mostrar o resultado da comparação.

Elementos:

- seletor do cargo A;
- seletor do cargo B;
- percentual de similaridade;
- nível de aproveitamento;
- assuntos em comum;
- assuntos exclusivos do cargo A;
- assuntos exclusivos do cargo B.

Base lógica:

    scripts/compare_editais.py

---

### Tela 5 — Checklist de estudo

Objetivo: permitir que o estudante marque seu progresso.

Status possíveis:

- não estudado;
- estudando;
- estudado;
- revisar;
- tenho dificuldade.

Fonte de dados inicial:

    data/progresso_usuario_modelo.csv

---

### Tela 6 — Relatório de aproveitamento

Objetivo: entregar ao estudante uma visão simples do que falta estudar.

Elementos:

- total de assuntos;
- percentual estudado;
- percentual estudado ou em andamento;
- assuntos pendentes;
- assuntos para revisão;
- assuntos com dificuldade;
- recomendação simples.

Base lógica:

    scripts/student_report.py

---

## 8. Fluxo principal do usuário

Fluxo esperado:

    1. O usuário acessa a plataforma.
    2. Escolhe uma área ou cargo.
    3. Visualiza editais relacionados.
    4. Seleciona dois cargos ou editais para comparar.
    5. Vê conteúdos iguais e diferentes.
    6. Marca o que já estudou.
    7. Recebe um relatório do que falta estudar.
    8. Decide se vale a pena estudar para o edital comparado.

---

## 9. Critério de sucesso do MVP

O MVP será considerado bom se uma pessoa conseguir entender em menos de 1 minuto:

- qual problema o projeto resolve;
- quem é o público-alvo;
- como comparar editais;
- como visualizar o aproveitamento de estudo;
- por que a solução é útil.

O MVP será considerado funcional se permitir:

- visualizar editais;
- visualizar cargos;
- comparar dois cargos;
- ver conteúdos em comum;
- ver conteúdos exclusivos;
- marcar progresso de estudo;
- gerar relatório de aproveitamento.

---

## 10. Próximos passos do MVP

- [ ] escolher área piloto real;
- [ ] substituir dados de exemplo por editais reais;
- [ ] cadastrar primeiros editais reais em data/editais.csv;
- [ ] cadastrar cargos reais em data/cargos.csv;
- [ ] extrair conteúdos reais para data/assuntos.csv;
- [ ] revisar normalização dos assuntos;
- [ ] testar scripts com dados reais;
- [ ] criar interface web inicial;
- [ ] publicar MVP;
- [ ] validar com estudantes.
