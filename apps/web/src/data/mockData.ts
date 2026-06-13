export type Exam = {
  editalId: string;
  nomeConcurso: string;
  orgao: string;
  banca: string;
  ano: number;
  esfera: "Federal" | "Estadual" | "Municipal";
  estado: string;
  municipio: string;
  areaPrincipal: string;
  editalUrl: string;
  fonteUrl: string;
  statusRevisao: "pendente" | "revisado" | "em_revisao";
};

export type Cargo = {
  cargoId: string;
  editalId: string;
  nomeCargo: string;
  area: string;
  escolaridade: string;
  salario: number;
  vagas: number;
  cargaHoraria: string;
};

export type Subject = {
  assuntoId: string;
  disciplina: string;
  textoOriginal: string;
  textoNormalizado: string;
};

export type CargoSubject = {
  cargoId: string;
  assuntoId: string;
};

export const exams: Exam[] = [
  {
    editalId: "edital_001",
    nomeConcurso: "Prefeitura de Florianópolis",
    orgao: "Prefeitura Municipal de Florianópolis",
    banca: "Fepese",
    ano: 2026,
    esfera: "Municipal",
    estado: "SC",
    municipio: "Florianópolis",
    areaPrincipal: "Administrativa",
    editalUrl: "#",
    fonteUrl: "#",
    statusRevisao: "em_revisao"
  },
  {
    editalId: "edital_002",
    nomeConcurso: "Tribunal Regional Administrativo",
    orgao: "TRA Sul",
    banca: "Cespe/Cebraspe",
    ano: 2026,
    esfera: "Federal",
    estado: "RS",
    municipio: "Porto Alegre",
    areaPrincipal: "Tribunais",
    editalUrl: "#",
    fonteUrl: "#",
    statusRevisao: "pendente"
  },
  {
    editalId: "edital_003",
    nomeConcurso: "Secretaria Estadual de Gestão",
    orgao: "SEG Santa Catarina",
    banca: "FGV",
    ano: 2025,
    esfera: "Estadual",
    estado: "SC",
    municipio: "Florianópolis",
    areaPrincipal: "Gestão Pública",
    editalUrl: "#",
    fonteUrl: "#",
    statusRevisao: "revisado"
  },
  {
    editalId: "edital_004",
    nomeConcurso: "Câmara Municipal de Joinville",
    orgao: "Câmara Municipal de Joinville",
    banca: "Instituto AOCP",
    ano: 2025,
    esfera: "Municipal",
    estado: "SC",
    municipio: "Joinville",
    areaPrincipal: "Legislativa",
    editalUrl: "#",
    fonteUrl: "#",
    statusRevisao: "em_revisao"
  }
];

export const cargos: Cargo[] = [
  {
    cargoId: "cargo_001",
    editalId: "edital_001",
    nomeCargo: "Técnico Administrativo",
    area: "Administrativa",
    escolaridade: "Nível médio",
    salario: 3500,
    vagas: 10,
    cargaHoraria: "40h"
  },
  {
    cargoId: "cargo_002",
    editalId: "edital_002",
    nomeCargo: "Técnico Judiciário",
    area: "Tribunais",
    escolaridade: "Nível médio",
    salario: 5600,
    vagas: 24,
    cargaHoraria: "40h"
  },
  {
    cargoId: "cargo_003",
    editalId: "edital_003",
    nomeCargo: "Analista de Gestão Pública",
    area: "Gestão Pública",
    escolaridade: "Nível superior",
    salario: 7200,
    vagas: 8,
    cargaHoraria: "40h"
  },
  {
    cargoId: "cargo_004",
    editalId: "edital_004",
    nomeCargo: "Assistente Legislativo",
    area: "Legislativa",
    escolaridade: "Nível médio",
    salario: 4100,
    vagas: 6,
    cargaHoraria: "30h"
  }
];

export const subjects: Subject[] = [
  { assuntoId: "assunto_001", disciplina: "Língua Portuguesa", textoOriginal: "Interpretação de textos", textoNormalizado: "interpretacao de texto" },
  { assuntoId: "assunto_002", disciplina: "Língua Portuguesa", textoOriginal: "Ortografia oficial", textoNormalizado: "ortografia oficial" },
  { assuntoId: "assunto_003", disciplina: "Matemática", textoOriginal: "Porcentagem", textoNormalizado: "porcentagem" },
  { assuntoId: "assunto_004", disciplina: "Informática", textoOriginal: "Noções de planilhas eletrônicas", textoNormalizado: "planilhas eletronicas" },
  { assuntoId: "assunto_005", disciplina: "Direito Administrativo", textoOriginal: "Atos administrativos", textoNormalizado: "atos administrativos" },
  { assuntoId: "assunto_006", disciplina: "Direito Constitucional", textoOriginal: "Direitos e garantias fundamentais", textoNormalizado: "direitos e garantias fundamentais" },
  { assuntoId: "assunto_007", disciplina: "Administração Pública", textoOriginal: "Princípios da administração pública", textoNormalizado: "principios da administracao publica" },
  { assuntoId: "assunto_008", disciplina: "Raciocínio Lógico", textoOriginal: "Estruturas lógicas", textoNormalizado: "estruturas logicas" },
  { assuntoId: "assunto_009", disciplina: "Legislação", textoOriginal: "Regimento interno", textoNormalizado: "regimento interno" },
  { assuntoId: "assunto_010", disciplina: "Gestão", textoOriginal: "Gestão de processos", textoNormalizado: "gestao de processos" },
  { assuntoId: "assunto_011", disciplina: "Arquivologia", textoOriginal: "Gestão de documentos", textoNormalizado: "gestao de documentos" },
  { assuntoId: "assunto_012", disciplina: "Informática", textoOriginal: "Segurança da informação", textoNormalizado: "seguranca da informacao" }
];

export const cargoSubjects: CargoSubject[] = [
  { cargoId: "cargo_001", assuntoId: "assunto_001" },
  { cargoId: "cargo_001", assuntoId: "assunto_002" },
  { cargoId: "cargo_001", assuntoId: "assunto_003" },
  { cargoId: "cargo_001", assuntoId: "assunto_004" },
  { cargoId: "cargo_001", assuntoId: "assunto_007" },
  { cargoId: "cargo_001", assuntoId: "assunto_011" },
  { cargoId: "cargo_002", assuntoId: "assunto_001" },
  { cargoId: "cargo_002", assuntoId: "assunto_002" },
  { cargoId: "cargo_002", assuntoId: "assunto_005" },
  { cargoId: "cargo_002", assuntoId: "assunto_006" },
  { cargoId: "cargo_002", assuntoId: "assunto_008" },
  { cargoId: "cargo_002", assuntoId: "assunto_012" },
  { cargoId: "cargo_003", assuntoId: "assunto_001" },
  { cargoId: "cargo_003", assuntoId: "assunto_003" },
  { cargoId: "cargo_003", assuntoId: "assunto_005" },
  { cargoId: "cargo_003", assuntoId: "assunto_007" },
  { cargoId: "cargo_003", assuntoId: "assunto_010" },
  { cargoId: "cargo_003", assuntoId: "assunto_011" },
  { cargoId: "cargo_004", assuntoId: "assunto_001" },
  { cargoId: "cargo_004", assuntoId: "assunto_002" },
  { cargoId: "cargo_004", assuntoId: "assunto_005" },
  { cargoId: "cargo_004", assuntoId: "assunto_006" },
  { cargoId: "cargo_004", assuntoId: "assunto_009" },
  { cargoId: "cargo_004", assuntoId: "assunto_012" }
];
