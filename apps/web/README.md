# Vitória Concursos Web

Frontend do MVP do Vitória Concursos. Esta aplicação fica isolada em `apps/web` para manter documentação, dados CSV e scripts Python separados do código da interface.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Dados mockados locais em `src/data/mockData.ts`

## Como rodar

```bash
npm install
npm run dev
```

A aplicação fica disponível em:

```text
http://localhost:3000
```

## Build estático

```bash
npm run build
```

O Next.js gera a versão estática em `out/`.

## Deploy no GitHub Pages

O deploy é feito pelo workflow `.github/workflows/deploy-pages.yml` em pushes para `main` ou manualmente pelo GitHub Actions.

URL esperada:

```text
https://profhudsonafonso.github.io/Vitoria_Concursos/
```

No repositório do GitHub, o Pages deve estar configurado com source `GitHub Actions`.

## Validação

```bash
npm run lint
npm run build
```
