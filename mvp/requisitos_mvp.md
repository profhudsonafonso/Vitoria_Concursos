# Requisitos do MVP — Vitória Concursos

## 1. Objetivo

O MVP do Vitória Concursos deve demonstrar, de forma simples e funcional, como estudantes de concurso público podem comparar editais, visualizar conteúdos em comum e organizar o que já estudaram.

O foco inicial é validar a principal proposta de valor:

**comparar conteúdos programáticos entre concursos e mostrar o aproveitamento de estudo do usuário.**

---

## 2. Escopo da primeira versão

A primeira versão será baseada em dados estruturados em CSV e scripts de apoio em Python.

O MVP deve usar a base inicial criada em:

| Arquivo | Função |
|---|---|
| data/editais.csv | Lista de editais |
| data/cargos.csv | Lista de cargos |
| data/disciplinas.csv | Lista de disciplinas |
| data/assuntos.csv | Assuntos originais e normalizados |
| data/conteudos_cargo.csv | Ligação entre cargos e assuntos |
| data/progresso_usuario_modelo.csv | Progresso de estudo do usuário |
| data/comparacoes_modelo.csv | Modelo de comparação |
| data/fontes.csv | Fontes oficiais e auxiliares |

---

## 3. Usuário principal

O usuário principal é o estudante de concurso público que deseja saber:

- quais concursos têm conteúdos parecidos;
- quais assuntos se repetem;
- quais assuntos são novos;
- o que ele já estudou;
- o que ainda falta estudar;
- qual concurso tem maior aproveitamento com sua preparação atual.

---

## 4. Funcionalidades obrigatórias

### 4.1 Listar editais

O sistema deve exibir uma lista de editais cadastrados.

Fonte principal:

    data/editais.csv

Cada edital deve mostrar:

- nome do concurso;
- órgão;
- banca;
- ano;
- esfera;
- estado;
- município;
- área principal;
- link da fonte oficial.

---

### 4.2 Listar cargos

O sistema deve exibir os cargos vinculados aos editais.

Fonte principal:

    data/cargos.csv

Cada cargo deve mostrar:

- nome do cargo;
- edital relacionado;
- área;
- escolaridade;
- salário;
- vagas;
- carga horária;
- requisitos.

---

### 4.3 Filtrar editais e cargos

O usuário deve conseguir filtrar por:

- área;
- cargo;
- banca;
- escolaridade;
- estado;
- ano;
- esfera.

---

### 4.4 Visualizar detalhe do edital

Ao clicar em um edital, o usuário deve visualizar:

- informações gerais do concurso;
- cargos disponíveis;
- salário, quando disponível;
- escolaridade;
- número de vagas;
- disciplinas;
- assuntos cobrados;
- link da fonte oficial;
- status de revisão dos dados.

Fontes relacionadas:

    data/editais.csv
    data/cargos.csv
    data/disciplinas.csv
    data/assuntos.csv
    data/conteudos_cargo.csv

---

### 4.5 Comparar dois cargos ou editais

O usuário deve selecionar dois cargos ou dois editais para comparação.

A comparação deve mostrar:

- conteúdos em comum;
- conteúdos exclusivos do primeiro cargo;
- conteúdos exclusivos do segundo cargo;
- quantidade de assuntos em comum;
- total de assuntos únicos;
- percentual de similaridade;
- nível de aproveitamento.

Script de referência:

    scripts/compare_editais.py

Exemplo de execução:

    python scripts\compare_editais.py --cargo-a cargo_001 --cargo-b cargo_002

Classificação inicial:

| Similaridade | Nível |
|---:|---|
| 0% a 39% | Baixo |
| 40% a 69% | Médio |
| 70% a 100% | Alto |

---

### 4.6 Marcar assuntos estudados

O usuário deve conseguir marcar um assunto como:

- não estudado;
- estudando;
- estudado;
- revisar;
- tenho dificuldade.

Fonte inicial:

    data/progresso_usuario_modelo.csv

Em uma primeira versão web, esse progresso pode ficar salvo em local storage, JSON local, Supabase ou banco simples.

---

### 4.7 Gerar relatório de aproveitamento

O sistema deve gerar um relatório simples com:

- total de assuntos do cargo;
- quantidade de assuntos estudados;
- quantidade de assuntos em andamento;
- quantidade de assuntos pendentes;
- quantidade de assuntos para revisão;
- quantidade de assuntos com dificuldade;
- percentual estudado;
- percentual estudado ou em andamento;
- recomendação simples.

Script de referência:

    scripts/student_report.py

Exemplo de execução:

    python scripts\student_report.py --usuario-id usuario_001 --cargo-id cargo_001

---

### 4.8 Gerar relatório de normalização

O sistema deve permitir revisar assuntos equivalentes.

Script de referência:

    scripts/normalize_subjects.py

Exemplo de execução:

    python scripts\normalize_subjects.py --report

Arquivos gerados:

| Arquivo | Função |
|---|---|
| data/normalized_subjects/normalized_subjects_summary.csv | Resumo dos assuntos normalizados |
| data/normalized_subjects/subject_equivalence_candidates.csv | Candidatos a equivalência |
| data/normalized_subjects/subjects_to_review.csv | Assuntos para revisão |

---

## 5. Funcionalidades desejáveis

Estas funcionalidades não são obrigatórias na primeira versão, mas podem ser adicionadas depois.

### 5.1 Ranking de editais compatíveis

Mostrar quais editais são mais parecidos com um edital base.

### 5.2 Plano de estudos simples

Gerar uma sugestão de estudo com base nos assuntos pendentes.

Critérios possíveis:

- data da prova;
- quantidade de assuntos pendentes;
- dificuldade marcada pelo usuário;
- recorrência dos assuntos;
- tempo disponível por semana.

### 5.3 Alertas de novos editais

Avisar o usuário quando um edital novo for parecido com sua preparação atual.

### 5.4 Comparação por banca

Mostrar padrões de conteúdos por banca organizadora.

### 5.5 Comparação semântica com IA

Identificar assuntos parecidos mesmo quando o texto normalizado ainda não é igual.

---

## 6. Telas do MVP

### Tela 1 — Página inicial

Objetivo: explicar o projeto rapidamente.

Elementos:

- título;
- subtítulo;
- botão para comparar editais;
- botão para ver concursos disponíveis;
- breve explicação da dor;
- breve explicação da solução.

Texto sugerido:

    Compare editais e estude com mais estratégia.

    O Vitória Concursos mostra conteúdos em comum, assuntos novos e o aproveitamento da sua preparação entre diferentes concursos públicos.

---

### Tela 2 — Lista de editais

Objetivo: permitir que o usuário veja os editais cadastrados.

Elementos:

- campo de busca;
- filtros;
- cards de editais;
- botão "ver detalhes";
- botão "comparar".

Fonte:

    data/editais.csv

---

### Tela 3 — Detalhe do edital

Objetivo: mostrar os dados estruturados de um edital.

Elementos:

- nome do concurso;
- órgão;
- banca;
- ano;
- cargos;
- salários;
- escolaridade;
- disciplinas;
- assuntos;
- link da fonte oficial.

Fontes:

    data/editais.csv
    data/cargos.csv
    data/disciplinas.csv
    data/assuntos.csv
    data/conteudos_cargo.csv

---

### Tela 4 — Comparação

Objetivo: mostrar o resultado da comparação entre dois cargos ou editais.

Elementos:

- seletor do cargo A;
- seletor do cargo B;
- percentual de similaridade;
- nível de aproveitamento;
- conteúdos em comum;
- conteúdos exclusivos do cargo A;
- conteúdos exclusivos do cargo B.

Script de referência:

    scripts/compare_editais.py

---

### Tela 5 — Checklist de estudo

Objetivo: permitir que o estudante marque seu progresso.

Elementos:

- lista de disciplinas;
- lista de assuntos;
- status de cada assunto;
- filtro por status;
- barra de progresso.

Fonte inicial:

    data/progresso_usuario_modelo.csv

---

### Tela 6 — Relatório de aproveitamento

Objetivo: entregar uma visão simples do plano de estudo.

Elementos:

- percentual estudado;
- quantidade de assuntos pendentes;
- principais conteúdos novos;
- conteúdos para revisão;
- conteúdos com dificuldade;
- recomendação final.

Script de referência:

    scripts/student_report.py

---

### Tela 7 — Revisão de normalização

Objetivo: apoiar o administrador ou equipe na revisão dos assuntos equivalentes.

Elementos:

- grupos de assuntos normalizados;
- textos originais agrupados;
- status de revisão;
- ação para confirmar equivalência;
- ação para separar assuntos diferentes.

Fonte:

    data/normalized_subjects/subjects_to_review.csv

---

## 7. Dados mínimos necessários

### 7.1 Edital

Campos mínimos:

| Campo | Exemplo |
|---|---|
| edital_id | edital_001 |
| nome_concurso | Concurso Prefeitura Exemplo |
| orgao | Prefeitura Municipal Exemplo |
| banca | Banca Exemplo |
| ano | 2026 |
| esfera | Municipal |
| estado | SC |
| municipio | Florianopolis |
| area_principal | Administrativa |
| edital_url | Link do PDF |
| fonte_url | Link da página oficial |
| status_revisao | pendente |

---

### 7.2 Cargo

Campos mínimos:

| Campo | Exemplo |
|---|---|
| cargo_id | cargo_001 |
| edital_id | edital_001 |
| nome_cargo | Tecnico Administrativo |
| area | Administrativa |
| escolaridade | Nivel medio |
| salario | 3500.00 |
| vagas | 10 |
| carga_horaria | 40h |

---

### 7.3 Disciplina

Campos mínimos:

| Campo | Exemplo |
|---|---|
| disciplina_id | disc_001 |
| nome_original | Lingua Portuguesa |
| nome_normalizado | Lingua Portuguesa |
| area_conhecimento | Linguagens |

---

### 7.4 Assunto

Campos mínimos:

| Campo | Exemplo |
|---|---|
| assunto_id | assunto_001 |
| disciplina_id | disc_001 |
| texto_original | Interpretacao de textos |
| texto_normalizado | Interpretacao de texto |
| nivel | tema |
| status_revisao | pendente |

---

### 7.5 Conteúdo do cargo

Campos mínimos:

| Campo | Exemplo |
|---|---|
| conteudo_id | conteudo_001 |
| cargo_id | cargo_001 |
| assunto_id | assunto_001 |
| obrigatorio | sim |
| fonte | Edital oficial |
| pagina | 32 |

---

### 7.6 Progresso do usuário

Campos mínimos:

| Campo | Exemplo |
|---|---|
| usuario_id | usuario_001 |
| assunto_id | assunto_001 |
| status | estudado |
| data_atualizacao | 2026-06-13 |
| observacoes | Exemplo de progresso |

Status possíveis:

- nao_estudado;
- estudando;
- estudado;
- revisar;
- dificuldade.

---

## 8. Lógica inicial de comparação

Na primeira versão, a comparação usa o campo:

    texto_normalizado

Dois assuntos são considerados iguais quando têm o mesmo texto normalizado.

Fórmula:

    similaridade = assuntos_em_comum / total_de_assuntos_unicos

Exemplo:

    Cargo A: 4 assuntos
    Cargo B: 4 assuntos
    Assuntos em comum: 2
    Total de assuntos únicos: 6
    Similaridade = 2 / 6 = 33,33%

---

## 9. Regras de negócio

1. Dois assuntos são iguais quando possuem o mesmo texto normalizado.
2. Assuntos apenas parecidos devem ser marcados para revisão.
3. O percentual de similaridade deve considerar o total de assuntos únicos.
4. O relatório de aproveitamento deve considerar os assuntos marcados pelo usuário.
5. Toda informação extraída de edital deve manter referência para a fonte original.
6. Dados extraídos automaticamente devem ter status de revisão.
7. O edital oficial deve ser sempre indicado como fonte final.
8. A plataforma não deve prometer aprovação em concurso.
9. O sistema deve separar dado bruto, dado extraído e dado normalizado.
10. O MVP pode começar com dados manuais, desde que o fluxo de comparação funcione.

---

## 10. Requisitos não funcionais

### Usabilidade

- interface simples;
- linguagem clara;
- poucos cliques para comparar;
- visual limpo;
- foco em estudantes.

### Confiabilidade

- manter link para fonte oficial;
- permitir revisão humana dos dados;
- indicar data de atualização;
- mostrar status de revisão.

### Escalabilidade futura

- permitir adicionar novos editais;
- permitir novas áreas;
- permitir novos cargos;
- permitir integração com extração automática;
- permitir comparação semântica com IA.

### Segurança

- proteger dados do usuário;
- evitar exposição de informações pessoais;
- permitir exclusão de dados de progresso;
- respeitar termos de uso das fontes.

---

## 11. Sugestão de stack técnica

### Opção simples para MVP

- Next.js;
- Tailwind CSS;
- Shadcn UI;
- JSON local ou CSV convertido para JSON;
- Vercel para publicação.

### Opção com backend

- Next.js no frontend;
- FastAPI ou Node.js no backend;
- PostgreSQL ou Supabase;
- Python para extração, normalização e comparação.

---

## 12. Scripts de apoio do MVP

| Script | Função |
|---|---|
| scripts/compare_editais.py | Comparar cargos e calcular similaridade |
| scripts/normalize_subjects.py | Gerar relatórios de normalização |
| scripts/student_report.py | Gerar relatório de progresso do estudante |
| scripts/extract_pdf_content.py | Futuro script de extração de texto de PDF |

---

## 13. Critérios de aceite

O MVP será considerado entregue quando permitir:

- [ ] visualizar lista de editais;
- [ ] filtrar editais;
- [ ] abrir detalhe de edital;
- [ ] listar cargos;
- [ ] selecionar dois cargos ou editais;
- [ ] comparar conteúdos;
- [ ] ver percentual de similaridade;
- [ ] ver conteúdos em comum;
- [ ] ver conteúdos exclusivos;
- [ ] marcar assuntos estudados;
- [ ] visualizar relatório de aproveitamento;
- [ ] revisar assuntos equivalentes;
- [ ] acessar link público do MVP.

---

## 14. Fora do escopo da primeira versão

A primeira versão não precisa ter:

- login completo;
- pagamento;
- coleta automática em larga escala;
- OCR avançado;
- comparação semântica profunda;
- aplicativo mobile;
- notificação por e-mail;
- painel administrativo completo;
- integração com todos os diários oficiais.

---

## 15. Próximos passos técnicos

1. Escolher área piloto real.
2. Selecionar 5 a 10 editais reais.
3. Substituir os exemplos dos CSVs por dados reais.
4. Testar comparação com cargos reais.
5. Rodar relatório de normalização.
6. Rodar relatório do estudante.
7. Criar interface web inicial.
8. Publicar MVP.
9. Validar com estudantes.
