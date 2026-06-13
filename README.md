# Vitória Concursos

## Visão geral

O **Vitória Concursos** é uma plataforma de inteligência para estudantes de concurso público. O objetivo é transformar editais, conteúdos programáticos, cargos, salários e informações de carreira em uma base de dados organizada, comparável e útil para o planejamento de estudos.

A plataforma permite que o estudante escolha uma área ou cargo, visualize concursos relacionados e compare os conteúdos cobrados em diferentes editais. Com isso, ele consegue identificar quais assuntos já estudados podem ser reaproveitados, quais conteúdos são novos e quais concursos são mais compatíveis com sua preparação atual.

## Aplicação web

O frontend do MVP fica em `apps/web`, separado dos dados CSV, scripts Python e documentos do projeto.

---

## Problema

Estudantes de concurso público precisam lidar com muitos editais em PDF, publicados em diferentes fontes, como Diário Oficial da União, diários oficiais estaduais, diários municipais, sites de bancas organizadoras e portais de órgãos públicos.

Hoje, grande parte desse processo é manual:

* abrir vários editais;
* procurar o conteúdo programático;
* copiar os assuntos;
* comparar cargos parecidos;
* identificar o que mudou;
* descobrir o que já foi estudado;
* decidir se vale a pena tentar outro concurso;
* montar um plano de estudo.

Isso consome tempo, aumenta a ansiedade e dificulta uma preparação estratégica.

---

## Solução

O **Vitória Concursos** propõe uma base de dados estruturada com informações extraídas de editais de concursos públicos.

A plataforma organiza essas informações por:

* concurso;
* órgão;
* banca;
* cargo;
* área;
* escolaridade;
* salário;
* remuneração;
* carreira;
* conteúdo programático;
* assuntos detalhados;
* data do edital;
* fonte oficial.

Com esses dados, o sistema permite comparar editais e mostrar:

* conteúdos iguais entre concursos;
* conteúdos semelhantes;
* conteúdos novos;
* conteúdos removidos;
* percentual de similaridade;
* aproveitamento de estudo;
* assuntos mais recorrentes;
* lacunas no plano de estudo do usuário.

---

## Público-alvo

O público principal são **estudantes de concurso público**.

Perfis de usuários:

* estudantes iniciantes;
* estudantes avançados;
* pessoas que estudam para uma carreira específica;
* pessoas que acompanham vários editais;
* candidatos que querem reaproveitar conteúdos já estudados;
* concurseiros que precisam organizar melhor o plano de estudo;
* cursinhos e professores que desejam analisar editais;
* mentores de estudo para concurso.

---

## Diferencial inovador

O diferencial do Vitória Concursos não é apenas listar editais. O diferencial é transformar editais em uma **base inteligente de comparação de conteúdos**.

A plataforma ajuda o estudante a responder perguntas como:

* Quais concursos cobram conteúdos parecidos?
* O que eu já estudei serve para outro edital?
* Quais assuntos aparecem com mais frequência?
* Qual concurso tem maior compatibilidade com minha preparação?
* O que mudou entre o edital anterior e o edital atual?
* Quais assuntos eu ainda preciso estudar?
* Qual plano de estudo devo seguir até a prova?

---

## Proposta de valor

O Vitória Concursos ajuda o estudante a estudar com mais estratégia, reduzindo tempo perdido com análise manual de editais e aumentando o aproveitamento dos conteúdos já estudados.

Mensagem central:

> O Vitória Concursos transforma editais públicos em mapas inteligentes de estudo, mostrando o que se repete, o que muda e quanto da preparação do estudante pode ser reaproveitada entre concursos.

---

## Como funciona

Fluxo geral da plataforma:

```text
Fontes oficiais de editais
        ↓
Coleta de editais e informações públicas
        ↓
Extração do conteúdo programático
        ↓
Organização por concurso, cargo, área e banca
        ↓
Normalização dos assuntos
        ↓
Comparação entre editais
        ↓
Cálculo de similaridade e aproveitamento
        ↓
Plano de estudo personalizado
        ↓
Relatório do que já foi estudado e do que ainda falta estudar
```

---

## Principais funcionalidades

### 1. Base de editais

Cadastro e organização de editais de concursos públicos, com informações como:

* nome do concurso;
* órgão;
* banca organizadora;
* cargo;
* área;
* escolaridade;
* salário;
* número de vagas;
* data de publicação;
* data da prova;
* link da fonte oficial;
* conteúdo programático.

---

### 2. Extração de conteúdo programático

Extração dos conteúdos que o estudante precisa estudar, separados por cargo e disciplina.

Exemplo:

```text
Cargo: Técnico Administrativo

Disciplinas:
- Língua Portuguesa
- Direito Administrativo
- Direito Constitucional
- Informática
- Raciocínio Lógico
- Administração Pública
- Legislação Específica
```

---

### 3. Comparação entre editais

O usuário poderá escolher dois ou mais editais para comparar.

A plataforma mostrará:

* conteúdos em comum;
* conteúdos exclusivos do edital A;
* conteúdos exclusivos do edital B;
* assuntos parecidos;
* percentual de similaridade;
* nível de reaproveitamento.

Exemplo:

```text
Comparação: Concurso A x Concurso B

Conteúdos em comum: 72%
Conteúdos novos: 18%
Conteúdos removidos: 10%
Nível de aproveitamento: Alto
```

---

### 4. Comparação por cargo

O sistema também permitirá comparar concursos pelo cargo ou carreira.

Exemplos:

* Técnico Administrativo;
* Assistente em Administração;
* Técnico Judiciário;
* Analista Judiciário;
* Auditor Fiscal;
* Professor;
* Enfermeiro;
* Policial Penal;
* Guarda Municipal;
* Analista Administrativo.

Isso ajuda o estudante a identificar concursos parecidos e montar uma estratégia de longo prazo.

---

### 5. Histórico de recorrência dos assuntos

A plataforma poderá mostrar quais assuntos aparecem com mais frequência em editais similares.

Exemplo:

| Assunto                | Frequência em editais similares |
| ---------------------- | ------------------------------: |
| Interpretação de texto |                             95% |
| Atos administrativos   |                             82% |
| Licitações e contratos |                             78% |
| Administração pública  |                             71% |
| Informática básica     |                             65% |
| Legislação específica  |                             30% |

---

### 6. Aproveitamento de estudo

O estudante poderá marcar os assuntos que já estudou.

Com isso, o sistema calcula o aproveitamento para cada edital.

Exemplo:

```text
Você já estudou 64% do conteúdo deste edital.

Conteúdos já estudados:
- Português
- Informática
- Direito Administrativo

Conteúdos pendentes:
- Legislação específica
- Raciocínio Lógico
- Administração Financeira e Orçamentária
```

---

### 7. Plano de estudos personalizado

Com base no edital escolhido e nos conteúdos marcados pelo usuário, a plataforma poderá gerar um plano de estudos.

O plano pode considerar:

* conteúdos já estudados;
* conteúdos pendentes;
* dificuldade informada pelo usuário;
* data da prova;
* tempo disponível por semana;
* prioridade dos assuntos;
* recorrência dos temas em editais anteriores.

---

### 8. Ranking de concursos compatíveis

O usuário poderá escolher um edital base, e a plataforma recomendará outros concursos com conteúdos parecidos.

Exemplo:

| Concurso   | Similaridade | Aproveitamento |
| ---------- | -----------: | -------------: |
| Concurso B |          86% |           Alto |
| Concurso C |          79% |           Alto |
| Concurso D |          62% |          Médio |
| Concurso E |          35% |          Baixo |

---

### 9. Alertas de novos editais

No futuro, o estudante poderá cadastrar áreas de interesse e receber alertas quando novos editais forem identificados.

Exemplo:

```text
Novo edital encontrado: Prefeitura X — Técnico Administrativo.

Similaridade com sua preparação atual: 74%
Nível de aproveitamento: Alto
```

---

## Fontes de dados

A plataforma poderá coletar ou organizar informações públicas de fontes como:

* Diário Oficial da União;
* diários oficiais estaduais;
* diários oficiais municipais;
* sites de bancas organizadoras;
* páginas oficiais de órgãos públicos;
* portais de concursos;
* páginas institucionais com plano de carreira;
* leis e tabelas de remuneração publicadas oficialmente.

Sempre que possível, a plataforma deve armazenar o link da fonte original para permitir rastreabilidade e conferência.

---

## Desafios técnicos

### 1. Extração de informações dos PDFs

Editais podem ter formatos diferentes. A plataforma precisará extrair:

* cargos;
* conteúdos programáticos;
* salários;
* requisitos;
* datas;
* vagas;
* tabelas;
* anexos.

---

### 2. Normalização dos conteúdos

O mesmo assunto pode aparecer escrito de formas diferentes.

Exemplo:

```text
Atos administrativos
Ato administrativo: conceito, requisitos e atributos
Direito Administrativo: atos da Administração Pública
```

O sistema precisará identificar que esses conteúdos são iguais ou muito parecidos.

---

### 3. Comparação semântica

A comparação entre editais não deve ser apenas por palavras iguais. É necessário identificar similaridade semântica entre conteúdos.

Exemplo:

```text
"Licitações e contratos administrativos"
pode ser semelhante a
"Lei nº 14.133/2021 e contratos públicos"
```

---

### 4. Atualização constante

Novos editais são publicados frequentemente. A plataforma deve evoluir para permitir atualização contínua da base.

---

## Módulos do sistema

### 1. Edital Data Hub

Módulo responsável por armazenar editais e metadados.

Funções:

* cadastrar edital;
* armazenar fonte oficial;
* registrar órgão, banca, cargo e datas;
* guardar arquivos ou links;
* controlar versão do edital.

---

### 2. Content Extraction Engine

Módulo responsável por extrair informações dos editais.

Funções:

* extrair conteúdo programático;
* identificar cargos;
* separar disciplinas;
* localizar tabelas de salário;
* extrair requisitos e escolaridade;
* estruturar dados em formato pesquisável.

---

### 3. Subject Normalization Engine

Módulo responsável por padronizar nomes de disciplinas e assuntos.

Funções:

* agrupar assuntos equivalentes;
* sugerir nomes padronizados;
* identificar duplicidades;
* criar taxonomia de conteúdos;
* permitir revisão humana.

---

### 4. Exam Comparison Dashboard

Painel para comparar editais e cargos.

Funções:

* selecionar editais;
* comparar conteúdos;
* mostrar conteúdos iguais;
* mostrar conteúdos novos;
* calcular percentual de similaridade;
* gerar relatório de comparação.

---

### 5. Study Planning Hub

Módulo de planejamento de estudo.

Funções:

* marcar assuntos estudados;
* marcar assuntos pendentes;
* gerar plano de estudo;
* priorizar conteúdos;
* acompanhar evolução;
* gerar relatório do que falta estudar.

---

### 6. Career & Salary Hub

Módulo para organizar informações de carreira e remuneração.

Funções:

* salário inicial;
* benefícios;
* plano de carreira;
* progressão;
* carga horária;
* requisitos do cargo;
* legislação relacionada.

---

### 7. Alert & Recommendation Hub

Módulo de alertas e recomendações.

Funções:

* alertas de novos editais;
* recomendação de concursos parecidos;
* notificação por e-mail;
* filtros por área, cargo, banca e salário;
* ranking de compatibilidade.

---

## MVP inicial

O MVP inicial deve ser simples, mas demonstrar claramente o valor da solução.

### Escopo sugerido

Primeira versão focada em uma área específica, por exemplo:

* área administrativa;
* cargos de nível médio;
* concursos municipais;
* concursos de universidades e institutos federais;
* concursos de tribunais;
* ou outra área com muitos editais comparáveis.

### Funcionalidades mínimas do MVP

* cadastro manual ou semi-automático de editais;
* lista de concursos disponíveis;
* filtro por área, cargo, banca e escolaridade;
* visualização do conteúdo programático por cargo;
* comparação entre dois editais;
* identificação de conteúdos em comum;
* identificação de conteúdos exclusivos;
* marcação de assuntos estudados;
* relatório simples do que falta estudar.

### Telas mínimas

1. Página inicial;
2. Lista de editais;
3. Filtro por área/cargo;
4. Detalhe do edital;
5. Comparação entre editais;
6. Checklist de conteúdos estudados;
7. Relatório de aproveitamento.

---

## Exemplo de uso

```text
1. O estudante escolhe a área "Administrativa".
2. O sistema mostra concursos disponíveis.
3. O estudante seleciona dois editais.
4. A plataforma compara os conteúdos.
5. O sistema mostra que 70% dos assuntos são iguais.
6. O estudante marca o que já estudou.
7. A plataforma gera um relatório com os assuntos pendentes.
8. O estudante recebe sugestão de plano de estudo.
```

---

## Modelo de negócio

Possíveis formas de monetização:

### Plano gratuito

* acesso limitado a editais;
* comparação básica;
* visualização de poucos relatórios.

### Plano premium

* comparações ilimitadas;
* alertas personalizados;
* plano de estudo;
* histórico de progresso;
* relatórios detalhados;
* ranking de concursos compatíveis.

### B2B para cursinhos e professores

* painel para análise de editais;
* relatórios para turmas;
* comparação entre concursos;
* identificação de assuntos recorrentes;
* apoio na criação de trilhas de estudo.

### API de dados

* fornecimento de dados estruturados de editais;
* integração com plataformas educacionais;
* integração com sistemas de cursinhos.

---

## Validação de mercado

A validação inicial deve verificar se estudantes realmente têm dificuldade para comparar editais e se usariam uma ferramenta como essa.

### Hipóteses a validar

1. Estudantes perdem tempo comparando editais manualmente.
2. Estudantes querem saber quais concursos são parecidos.
3. Estudantes valorizam saber o que já foi estudado e o que falta estudar.
4. Estudantes pagariam por alertas, comparação e plano de estudo.
5. Cursinhos e mentores poderiam usar relatórios de comparação.

### Público para entrevista

* estudantes iniciantes;
* estudantes avançados;
* aprovados em concursos;
* professores de cursinhos;
* mentores de estudo;
* donos de cursos preparatórios.

### Perguntas sugeridas

1. Você costuma comparar editais de concursos diferentes?
2. Como você faz isso hoje?
3. Quanto tempo você gasta analisando um edital?
4. Você já deixou de tentar um concurso por não saber se o conteúdo era parecido?
5. Você gostaria de saber o percentual de aproveitamento entre editais?
6. Você usaria uma ferramenta que mostra conteúdos iguais e novos?
7. Você pagaria por um plano de estudo baseado no edital?
8. Quais funcionalidades seriam mais importantes?
9. Que tipo de informação faria você confiar na plataforma?
10. Você aceitaria testar um MVP?

---

## Roadmap

### Fase 1 — Organização da ideia

* [ ] definir nome final;
* [ ] definir área inicial do MVP;
* [ ] definir público inicial;
* [ ] escolher fontes de editais;
* [ ] criar estrutura do repositório;
* [ ] documentar proposta.

### Fase 2 — MVP manual/semi-automático

* [ ] cadastrar primeiros editais;
* [ ] extrair conteúdos manualmente ou com apoio de IA;
* [ ] criar base inicial de assuntos;
* [ ] criar tela de comparação;
* [ ] criar relatório de conteúdos em comum;
* [ ] criar checklist de assuntos estudados.

### Fase 3 — Validação

* [ ] criar formulário de validação;
* [ ] entrevistar estudantes;
* [ ] entrevistar professores/mentores;
* [ ] coletar feedback;
* [ ] medir interesse;
* [ ] ajustar proposta.

### Fase 4 — Automação

* [ ] automatizar extração de PDFs;
* [ ] criar algoritmo de normalização de assuntos;
* [ ] calcular similaridade semântica;
* [ ] criar alertas de novos editais;
* [ ] melhorar dashboard.

### Fase 5 — Produto

* [ ] criar login de usuários;
* [ ] salvar progresso de estudo;
* [ ] gerar plano personalizado;
* [ ] criar assinatura premium;
* [ ] criar painel para cursinhos;
* [ ] criar API de dados.

---

## Tecnologias possíveis

O projeto pode ser desenvolvido inicialmente com tecnologias simples.

### Frontend

* React;
* Next.js;
* Tailwind CSS;
* Shadcn UI.

### Backend

* Node.js;
* Python;
* FastAPI;
* Django;
* NestJS.

### Banco de dados

* PostgreSQL;
* MongoDB;
* Supabase;
* Firebase.

### Extração de dados

* Python;
* PyMuPDF;
* pdfplumber;
* OCR, quando necessário;
* parsers de HTML;
* integração com IA para extração assistida.

### Inteligência artificial

* classificação de assuntos;
* normalização de nomes;
* comparação semântica;
* resumo de edital;
* geração de plano de estudos;
* recomendação de concursos compatíveis.

---

## Estrutura inicial sugerida do repositório

```text
Vitoria_Concursos/
├── README.md
├── proposal/
│   ├── proposta_completa.md
│   ├── fundamentacao_teorica.md
│   └── textos_plataforma.md
├── mvp/
│   ├── briefing_mvp.md
│   └── requisitos_mvp.md
├── validation/
│   ├── briefing_validacao.md
│   ├── formulario_validacao.md
│   └── respostas_validacao_modelo.csv
├── data/
│   ├── raw_editais/
│   ├── extracted_content/
│   └── normalized_subjects/
├── docs/
│   ├── arquitetura.md
│   ├── modelo_dados.md
│   └── fontes_dados.md
├── scripts/
│   ├── extract_pdf_content.py
│   ├── normalize_subjects.py
│   └── compare_editais.py
└── assets/
    └── images/
```

---

## Métricas de sucesso

O projeto poderá ser avaliado por métricas como:

* quantidade de editais cadastrados;
* quantidade de cargos estruturados;
* quantidade de conteúdos extraídos;
* percentual de extração correta;
* número de usuários cadastrados;
* número de comparações realizadas;
* número de planos de estudo gerados;
* interesse dos usuários na validação;
* conversão para plano premium;
* redução do tempo de análise de editais.

---

## Impacto esperado

O Vitória Concursos pode gerar impacto educacional e social ao facilitar o acesso organizado a informações públicas de concursos.

Benefícios esperados:

* reduzir tempo gasto na análise de editais;
* melhorar o planejamento de estudo;
* ajudar estudantes com menos acesso a mentoria;
* aumentar o reaproveitamento de conteúdos estudados;
* apoiar decisões mais estratégicas;
* democratizar informações sobre concursos públicos;
* criar uma base histórica de conteúdos cobrados.

---

## Cuidados e princípios

A plataforma deve seguir alguns princípios:

* usar fontes públicas e oficiais sempre que possível;
* manter link para a fonte original;
* deixar claro quando uma informação foi extraída automaticamente;
* permitir revisão humana de conteúdos;
* evitar promessas de aprovação;
* proteger dados dos usuários;
* respeitar direitos autorais e termos de uso das fontes;
* tratar a IA como apoio, não como fonte única de verdade.

---

## Status atual

Projeto em fase inicial de concepção e organização.

Próximos passos:

* [ ] criar estrutura inicial do repositório;
* [ ] definir área piloto;
* [ ] selecionar primeiros editais;
* [ ] criar base inicial de comparação;
* [ ] desenvolver MVP;
* [ ] validar com estudantes de concurso.

---

## Licença

A definir.

---

## Contato

A definir.
