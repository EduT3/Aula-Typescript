# Typescript

Conjunto de conteúdo das aulas de typescript

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Typescript**
| :label: Tecnologias | HTML, CSS, TypeScript (tecnologias utilizadas)
| :rocket: URL         | https://aula-typescript-eta.vercel.app/

## Fonte e execução

A versão atual usa `app/src/` como fonte TypeScript e gera JavaScript em `app/dist/js/`, conforme `tsconfig.json`. As pastas `app/models`, `app/controllers` e `dist` preservam etapas anteriores do curso; não são a fonte compilada atual.

Com Node.js e npm instalados:

```sh
npm ci
npm test
npm run compile
npm start
```

`npm test` verifica os tipos sem gerar arquivos. `npm start` acompanha as alterações TypeScript e serve `app/dist`, a interface atual. O HTML dessa interface é mantido diretamente em `app/dist/index.html`; não é gerado pelo compilador.

## API opcional de importação

Em outro terminal, execute `cd servidor-api`, `npm ci` e `npm start`. A importação consulta `http://localhost:8080/dados`; uma hospedagem estática não inclui essa API. O cadastro manual continua disponível sem ela. Erros HTTP ou dados inválidos agora geram mensagem na tela em vez de rejeição não tratada.

## Verificação

- Cadastre uma negociação em dia útil e confira quantidade, valor e volume.
- Tente uma data de fim de semana.
- Importe com a API ligada e desligada. O botão Importar não deve submeter o formulário.
- Navegue por teclado e confira a tabela em tela estreita.

Este é um projeto didático. As negociações ficam em memória e não representam operações financeiras reais. O teste de tipos não substitui testes funcionais de navegador.
