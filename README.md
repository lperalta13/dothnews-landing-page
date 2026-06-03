# DothNews Landing Page

Landing page institucional da DothNews, voltada para apresentar a plataforma como infraestrutura editorial especializada para portais de noticias. A pagina comunica autoridade, diferenciais tecnicos, validacao de mercado e conduz o visitante para uma solicitacao de diagnostico consultivo.

## Objetivo

Esta landing foi criada para apoiar a captacao de operacoes editoriais que cresceram alem de solucoes genericas de site ou CMS. O discurso central e que a DothNews nao e uma plataforma adaptada para portais: ela foi construida para sustentar audiencia, receita, estabilidade, suporte e evolucao continua em operacoes jornalisticas digitais.

## Principais mensagens

- Infraestrutura editorial feita para crescer.
- Tecnologia propria, sem dependencias criticas de plugins de terceiros.
- Foco exclusivo em portais de noticias e operacoes editoriais.
- Estabilidade, performance, SEO tecnico e monitoramento ativo.
- Suporte especializado para contextos de redacao e cobertura em tempo real.
- Diagnostico consultivo antes de qualquer proposta comercial.

## Estrutura da pagina

- `Header`: navegacao fixa com efeito liquid glass ao rolar a pagina.
- `Hero`: headline principal, chamada para diagnostico e evidencia visual do painel SGI.
- `GrowthSection`: dores comuns de portais em crescimento.
- `ReflectionSection`: bloco de reflexao sobre infraestrutura que ficou para tras.
- `WhatSection`: explicacao da plataforma e pilares de valor.
- `WhySection`: metricas, logos de clientes e validacao de mercado.
- `EvolutionSection`: evolucao continua, IA editorial, SEO, performance e monitoramento.
- `FaqSection`: perguntas frequentes sobre migracao, suporte e perfil de operacao.
- `DiagnosisSection`: formulario local de solicitacao de diagnostico.
- `FinalCta`: chamada final para conversao.
- `Footer`: informacoes institucionais da DothNews/Dotcom.

## Tecnologias

- React 18
- Vite 5
- Tailwind CSS 3
- Sass/SCSS
- PostCSS e Autoprefixer
- JavaScript com ES Modules

## Assets

Os assets ficam em `public/assets/` e incluem:

- Logos DothNews em SVG.
- Logos de clientes.
- Capturas do SGI e telas de monitoramento.
- Blobs vetoriais usados no fundo do hero.

## Estilos e UI

O projeto combina Tailwind CSS com estilos globais e SCSS pontual:

- `src/index.css`: base Tailwind, animacoes globais, utilitarios de tipografia e reveal.
- `src/styles/components.scss`: hero, efeito liquid glass e FAQ accordion.
- `tailwind.config.js`: tokens de cor, fontes e largura maxima do shell.
- `src/components/ui.jsx`: componentes compartilhados como `Shell`, `Reveal`, `Card`, `Eyebrow` e `Icon`.

O efeito liquid glass depende do filtro SVG `#container-glass` definido em `src/App.jsx` e aplicado pela classe `.liquid-glass`.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Desenvolvimento

Use `npm run dev` para rodar localmente com Vite. Para validar uma entrega antes de publicar ou commitar, rode:

```bash
npm run build
```

## Observacoes de manutencao

- O formulario de diagnostico hoje e local: ele apenas altera o estado visual de envio, sem integracao com backend.
- Mantenha `node_modules/`, `dist/`, `.env*`, `.claude/` e arquivos `._*` fora do Git.
- Ao alterar seções, mensagens comerciais, tecnologias, assets relevantes ou fluxo de conversao, atualize este README junto com o commit.
- Antes de qualquer commit futuro, faca uma varredura no que mudou e confirme se este README precisa refletir as alteracoes.
