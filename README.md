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
- Pre-render SSR no build para entregar HTML indexavel
- JavaScript com ES Modules

## SEO e indexacao

O projeto usa uma landing de rota unica em `https://dothnews.com.br/`, com SEO tecnico concentrado em `index.html`, arquivos publicos e no build de pre-render:

- `index.html`: title, meta description, canonical, hreflang, robots, Open Graph, Twitter Card, preload da imagem LCP e JSON-LD.
- `public/robots.txt`: libera indexacao e aponta para o sitemap oficial.
- `public/sitemap.xml`: declara a URL canonica da landing e deve ter `lastmod` atualizado em publicacoes relevantes.
- `public/assets/og-image.png`: imagem social usada por Open Graph e Twitter Card.
- `src/entry-server.jsx` e `scripts/prerender.mjs`: geram HTML pre-renderizado dentro de `dist/index.html` ao rodar `npm run build`.

Ao alterar proposta, headline, secoes, FAQ, URLs de ancora, imagens sociais ou data de publicacao, revise tambem os metadados, JSON-LD, sitemap e textos compartilhados para manter consistencia entre pagina, SEO e redes sociais.

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

`npm run build` executa tres etapas: build client do Vite, build SSR de `src/entry-server.jsx` e pre-render via `scripts/prerender.mjs`. O script tambem remove a pasta temporaria `dist/server` e artefatos AppleDouble `._*` do `dist`.

## Desenvolvimento

Use `npm run dev` para rodar localmente com Vite. Para validar uma entrega antes de publicar ou commitar, rode:

```bash
npm run build
```

## Observacoes de manutencao

- O formulario de diagnostico hoje e local: ele apenas altera o estado visual de envio, sem integracao com backend.
- A landing e pre-renderizada no build para melhorar indexacao; preserve o marcador `<div id="root"><!--app-html--></div>` em `index.html`.
- Mantenha a URL canonica `https://dothnews.com.br/` sincronizada entre canonical, Open Graph, Twitter Card, JSON-LD, sitemap e robots.
- Atualize `dateModified` no JSON-LD e `lastmod` no sitemap quando publicar mudancas relevantes de conteudo.
- Se mudar perguntas/respostas do FAQ visual, atualize tambem o schema `FAQPage` em `index.html`.
- Se trocar imagem de compartilhamento, mantenha `og-image.png` em proporcao 1200x630 ou ajuste as dimensoes nos metadados.
- Mantenha `node_modules/`, `dist/`, `.env*`, `.claude/` e arquivos `._*` fora do Git.
- Ao alterar seções, mensagens comerciais, tecnologias, assets relevantes ou fluxo de conversao, atualize este README junto com o commit.
- Antes de qualquer commit futuro, faca uma varredura no que mudou e confirme se este README precisa refletir as alteracoes.
