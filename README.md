# Prata, Lacerda & Videira WebApp

Aplicação institucional desenvolvida com Next.js para o escritório Prata, Lacerda & Videira Advogadas.

## Tecnologias

- Next.js 15 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Nodemailer (envio de formulário de contato)

## Estrutura principal

```text
src/
  app/
    api/contact/route.ts      # Endpoint de contato
    layout.tsx                # Layout global e metadados
    page.tsx                  # Home
    about/page.tsx            # Sobre
    areas/page.tsx            # Áreas de atuação
    article/page.tsx          # Artigos e publicações
    contact/page.tsx          # Página de contato
  components/
    header/
    footer/
    section-hero/
    section-areas/
    section-about/
    section-contact/
```

## Pré-requisitos

- Node.js 20+
- npm 10+

## Instalação

```bash
npm install
```

## Variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app
```

### Observações importantes

- O endpoint de contato usa Gmail via Nodemailer.
- Para contas Gmail, use senha de app (não use senha comum da conta).
- Sem essas variáveis, a API `/api/contact` retorna erro 500 por configuração ausente.

## Scripts

```bash
npm run dev      # Ambiente de desenvolvimento
npm run lint     # Lint
npm run build    # Build de produção
npm run start    # Inicia versão de produção
```

## Rotas

- /
- /about
- /areas
- /article
- /contact
- /api/contact (POST)

## Deploy

### Checklist recomendado

1. Configurar `EMAIL_USER` e `EMAIL_PASS` no provedor (Vercel/servidor).
2. Rodar validações locais:

```bash
npm run lint
npm run build
npm audit --omit=dev
```

3. Garantir que links e arquivos estáticos em `public/` estejam corretos.

## Endpoint de contato

- Método: `POST`
- Rota: `/api/contact`
- Body JSON esperado:

```json
{
  "nome": "Nome",
  "email": "email@dominio.com",
  "telefone": "(92) 99999-9999",
  "mensagem": "Mensagem"
}
```

## Licença

Uso interno do projeto.
