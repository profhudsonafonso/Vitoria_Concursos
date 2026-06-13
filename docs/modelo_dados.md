# Modelo de Dados Inicial — Vitória Concursos

## Entidades principais

### Concurso

| Campo | Descrição |
|---|---|
| id | Identificador interno |
| nome | Nome do concurso |
| orgao | Órgão responsável |
| banca | Banca organizadora |
| esfera | Federal, estadual ou municipal |
| estado | Estado relacionado |
| municipio | Município, quando houver |
| ano | Ano do edital |
| fonte_url | Link da fonte oficial |
| edital_pdf_url | Link do PDF |
| data_publicacao | Data de publicação |
| data_prova | Data da prova |

---

### Cargo

| Campo | Descrição |
|---|---|
| id | Identificador interno |
| concurso_id | Concurso relacionado |
| nome | Nome do cargo |
| area | Área do cargo |
| escolaridade | Nível exigido |
| salario | Salário inicial |
| vagas | Número de vagas |
| carga_horaria | Carga horária |
| carreira | Informações de carreira |

---

### Disciplina

| Campo | Descrição |
|---|---|
| id | Identificador interno |
| nome_original | Nome extraído do edital |
| nome_normalizado | Nome padronizado |

---

### Assunto

| Campo | Descrição |
|---|---|
| id | Identificador interno |
| disciplina_id | Disciplina relacionada |
| texto_original | Texto extraído do edital |
| texto_normalizado | Texto padronizado |
| nivel | Tema, subtema ou detalhe |
| fonte | Página ou seção do edital |

---

### Conteúdo do Cargo

| Campo | Descrição |
|---|---|
| id | Identificador interno |
| cargo_id | Cargo relacionado |
| assunto_id | Assunto relacionado |
| obrigatorio | Indica se é obrigatório |
| peso | Peso, se informado |
