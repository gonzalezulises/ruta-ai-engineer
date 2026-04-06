# Google Stitch MCP — Setup para Claude Code

Guia completa para integrar [Google Stitch](https://stitch.withgoogle.com/) con [Claude Code](https://docs.anthropic.com/en/docs/claude-code) via MCP (Model Context Protocol).

Google Stitch genera UI designs de alta fidelidad desde prompts de texto, powered by Gemini. Esta guia cubre la configuracion paso a paso para usar Stitch directamente desde Claude Code.

## Tech Stack

- [Astro](https://astro.build/) v6 — Static site generator
- [Tailwind CSS](https://tailwindcss.com/) v4 — Utility-first CSS
- [Shiki](https://shiki.style/) — Syntax highlighting

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

El sitio es estatico y se puede desplegar en cualquier proveedor. Optimizado para [Vercel](https://vercel.com/).

## Recursos

- [Google Stitch](https://stitch.withgoogle.com/)
- [@_davideast/stitch-mcp](https://www.npmjs.com/package/@_davideast/stitch-mcp)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code)

## Autor

[Ulises Gonzalez](https://github.com/gonzalezulises)
