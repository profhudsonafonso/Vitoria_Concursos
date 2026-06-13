# Requisitos do MVP — Vitória Concursos

## 1. Objetivo do MVP

O MVP do Vitória Concursos deve demonstrar, de forma simples e funcional, como estudantes de concurso público podem comparar editais, visualizar conteúdos em comum e organizar o que já estudaram.

A primeira versão não precisa automatizar toda a coleta de editais. O foco inicial é validar o valor principal da solução:

**Comparar conteúdos programáticos entre concursos e mostrar o aproveitamento de estudo do usuário.**

---

## 2. Escopo da primeira versão

O MVP inicial será focado em uma área piloto, com poucos editais cadastrados manualmente ou semi-automaticamente.

### Área piloto sugerida

Escolher uma das opções:

- Área administrativa;
- Técnico Administrativo;
- Assistente em Administração;
- Concursos de universidades e institutos federais;
- Concursos municipais;
- Concursos de tribunais.

### Quantidade inicial de dados

Para a primeira versão, a base pode conter:

- 5 a 10 editais;
- 10 a 30 cargos;
- 5 a 15 disciplinas;
- 50 a 200 assuntos normalizados.

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

Cada edital deve mostrar:

- nome do concurso;
- órgão;
- banca;
- ano;
- esfera;
- estado;
- área principal;
- link da fonte oficial, quando disponível.

---

### 4.2 Filtrar editais

O usuário deve conseguir filtrar editais por:

- área;
- cargo;
- banca;
- escolaridade;
- estado;
- ano.

---

### 4.3 Visualizar detalhe do edital

Ao clicar em um edital, o usuário deve visualizar:

- informações gerais do concurso;
- cargos disponíveis;
- salário, quando disponível;
- escolaridade;
- número de vagas;
- disciplinas;
- assuntos cobrados;
- link da fonte oficial.

---

### 4.4 Comparar dois editais

O usuário deve selecionar dois editais ou dois cargos para comparação.

A comparação deve mostrar:

- conteúdos em comum;
- conteúdos exclusivos do primeiro edital;
- conteúdos exclusivos do segundo edital;
- quantidade de assuntos em comum;
- percentual de similaridade;
- nível de aproveitamento.

Classificação inicial sugerida:

| Similaridade | Nível |
|---:|---|
| 0% a 39% | Baixo |
| 40% a 69% | Médio |
| 70% a 100% | Alto |

---

### 4.5 Marcar assuntos estudados

O usuário deve conseguir marcar um assunto como:

- não estudado;
- estudando;
- estudado;
- revisar;
- tenho dificuldade.

Na primeira versão, isso pode ficar salvo apenas no navegador, usando local storage, ou em uma base simples.

---

### 4.6 Gerar relatório de aproveitamento

O sistema deve gerar um relatório simples com:

- total de assuntos do edital;
- quantidade de assuntos já estudados;
- percentual estudado;
- assuntos pendentes;
- assuntos para revisão;
- assuntos novos em comparação com outro edital.

Exemplo de relatório:

    Você já estudou 64% do conteúdo deste edital.

    Assuntos já estudados:
    - Língua Portuguesa
    - Informática
    - Direito Administrativo

    Assuntos pendentes:
    - Legislação específica
    - Administração Pública
    - Raciocínio Lógico

---

## 5. Funcionalidades desejáveis

Estas funcionalidades não são obrigatórias na primeira versão, mas podem ser adicionadas se houver tempo.

### 5.1 Ranking de editais compatíveis

O sistema pode mostrar quais editais são mais parecidos com um edital base.

| Edital | Similaridade | Aproveitamento |
|---|---:|---|
| Concurso B | 86% | Alto |
| Concurso C | 79% | Alto |
| Concurso D | 62% | Médio |

---

### 5.2 Plano de estudos simples

O sistema pode gerar uma sugestão de estudo com base nos assuntos pendentes.

Critérios possíveis:

- data da prova;
- quantidade de assuntos pendentes;
- dificuldade marcada pelo usuário;
- recorrência dos assuntos;
- tempo disponível por semana.

---

### 5.3 Alertas de novos editais

Funcionalidade futura para avisar o usuário quando um edital novo for parecido com sua preparação atual.

---

### 5.4 Comparação por banca

Funcionalidade futura para mostrar padrões de conteúdos por banca organizadora.

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

---

### Tela 4 — Comparação de editais

Objetivo: mostrar o resultado da comparação entre dois editais ou cargos.

Elementos:

- seletor do edital A;
- seletor do edital B;
- percentual de similaridade;
- conteúdos em comum;
- conteúdos exclusivos do edital A;
- conteúdos exclusivos do edital B;
- recomendação de aproveitamento.

---

### Tela 5 — Checklist de estudo

Objetivo: permitir que o estudante marque seu progresso.

Elementos:

- lista de disciplinas;
- lista de assuntos;
- status de cada assunto;
- filtro por status;
- barra de progresso.

---

### Tela 6 — Relatório de aproveitamento

Objetivo: entregar uma visão simples do plano de estudo.

Elementos:

- percentual estudado;
- quantidade de assuntos pendentes;
- principais conteúdos novos;
- conteúdos para revisão;
- recomendação final.

---

## 7. Dados mínimos necessários

### 7.1 Concurso

Campos mínimos:

| Campo | Exemplo |
|---|---|
| id | concurso_001 |
| nome | Concurso Prefeitura X |
| orgao | Prefeitura Municipal X |
| banca | Banca Exemplo |
| ano | 2026 |
| esfera | Municipal |
| estado | SC |
| municipio | Florianópolis |
| fonte_url | Link oficial do edital |

---

### 7.2 Cargo

Campos mínimos:

| Campo | Exemplo |
|---|---|
| id | cargo_001 |
| concurso_id | concurso_001 |
| nome | Técnico Administrativo |
| area | Administrativa |
| escolaridade | Nível médio |
| salario | 3500.00 |
| vagas | 10 |

---

### 7.3 Disciplina

Campos mínimos:

| Campo | Exemplo |
|---|---|
| id | disciplina_001 |
| nome | Língua Portuguesa |

---

### 7.4 Assunto

Campos mínimos:

| Campo | Exemplo |
|---|---|
| id | assunto_001 |
| disciplina_id | disciplina_001 |
| texto_original | Interpretação de textos |
| texto_normalizado | Interpretação de texto |

---

### 7.5 Conteúdo do cargo

Campos mínimos:

| Campo | Exemplo |
|---|---|
| cargo_id | cargo_001 |
| assunto_id | assunto_001 |

---

### 7.6 Progresso do usuário

Campos mínimos:

| Campo | Exemplo |
|---|---|
| usuario_id | usuario_001 |
| assunto_id | assunto_001 |
| status | estudado |

Status possíveis:

- nao_estudado;
- estudando;
- estudado;
- revisar;
- dificuldade.

---

## 8. Lógica inicial de comparação

Na primeira versão, a comparação pode usar nomes normalizados dos assuntos.

Fórmula simples:

    similaridade = assuntos_em_comum / total_de_assuntos_unicos

Exemplo:

    Edital A: 100 assuntos
    Edital B: 80 assuntos
    Assuntos únicos somados: 120
    Assuntos em comum: 70

    Similaridade = 70 / 120 = 58,3%

---

## 9. Regras de negócio

1. Dois assuntos são iguais quando possuem o mesmo texto normalizado.
2. Assuntos apenas parecidos podem ser tratados em fase futura com IA.
3. O percentual de similaridade deve considerar o total de assuntos únicos entre os dois editais.
4. O relatório de aproveitamento deve considerar os assuntos marcados pelo usuário.
5. Toda informação extraída de edital deve manter referência para a fonte original.
6. O sistema deve informar quando um dado foi extraído automaticamente e ainda precisa de revisão.

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
- indicar data de atualização.

### Escalabilidade futura

- permitir adicionar novos editais;
- permitir novas áreas;
- permitir novos cargos;
- permitir integração com extração automática.

### Segurança

- proteger dados do usuário;
- evitar exposição de informações pessoais;
- permitir exclusão de dados de progresso.

---

## 11. Sugestão de stack técnica

### Opção simples para MVP

- Next.js;
- Tailwind CSS;
- Shadcn UI;
- JSON local ou Supabase;
- Vercel para publicação.

### Opção com backend

- Next.js no frontend;
- FastAPI ou Node.js no backend;
- PostgreSQL ou Supabase;
- Python para extração de PDFs.

---

## 12. Critérios de aceite

O MVP será considerado entregue quando permitir:

- [ ] visualizar lista de editais;
- [ ] filtrar editais;
- [ ] abrir detalhe de edital;
- [ ] selecionar dois editais ou cargos;
- [ ] comparar conteúdos;
- [ ] ver percentual de similaridade;
- [ ] ver conteúdos em comum;
- [ ] ver conteúdos exclusivos;
- [ ] marcar assuntos estudados;
- [ ] visualizar relatório de aproveitamento;
- [ ] acessar link público do MVP.

---

## 13. Fora do escopo da primeira versão

Para evitar escopo muito grande, a primeira versão não precisa ter:

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

## 14. Próximos passos técnicos

1. Escolher área piloto.
2. Selecionar 5 a 10 editais.
3. Criar base inicial em JSON ou CSV.
4. Criar interface de listagem.
5. Criar tela de comparação.
6. Criar checklist de assuntos estudados.
7. Criar relatório de aproveitamento.
8. Publicar MVP.
