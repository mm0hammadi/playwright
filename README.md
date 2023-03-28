# playwright
project automation of playwright tests and ts-vite








<br />

## Features

- ⚛️ React 18.2.0
- ⛑ Vite.js
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 👷  Workflow — Run Tests



```
# yarn
yarn install
# npm
npm install
# pnpm
pnpm install
```

Run Project:
#npm
npm run dev
#yarn
yarn run dev

### Development

To start the project locally, run:

```bash
pnpm dev
npm run dev
```

Open `http://localhost:3000` with your browser to see the result.

## Testimonials

> [**“This starter is by far the best TypeScript starter for Next.js. Feature packed but un-opinionated at the same time!”**](https://github.com/jpedroschmitz/typescript-nextjs-starter/issues/87#issue-789642190)<br>
> — Arafat Zahan

> [**“I can really recommend the Next.js Typescript Starter repo as a solid foundation for your future Next.js projects.”**](https://corfitz.medium.com/create-a-custom-create-next-project-command-2a6b35a1c8e6)<br>
> — Corfitz

> [**“Brilliant work!”**](https://github.com/jpedroschmitz/typescript-nextjs-starter/issues/87#issuecomment-769314539)<br>
> — Soham Dasgupta

## Showcase

List of websites that started off with Next.js TypeScript Starter:

- [dowhile.io](https://dowhile.io)
- [hygraph.com](https://hygraph.com)
- [nextlevelweek.com](https://nextlevelweek.com)
- [rocketseat.com.br](https://www.rocketseat.com.br)
- [unfork.vercel.app](https://unfork.vercel.app)
- [cryptools.dev](https://cryptools.dev)
- [Add yours](https://github.com/jpedroschmitz/typescript-nextjs-starter/edit/main/README.md)

## Documentation

### Requirements

- Node.js >= 12.22.0
- pnpm 7

### Directory Structure

- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `pnpm dev` — Starts the application in development mode at `http://localhost:3000`.
- `pnpm build` — Creates an optimized production build of your application.
- `pnpm start` — Starts the application in production mode.
- `pnpm type-check` — Validate code using TypeScript compiler.
- `pnpm lint` — Runs ESLint for all files in the `src` directory.
- `pnpm format` — Runs Prettier for all files in the `src` directory.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from '@/components/Button';

// To import images or other files from the public folder
import avatar from '@/public/avatar.png';
```

### Switch to Yarn/npm

This starter uses pnpm by default, but this choice is yours. If you'd like to switch to Yarn/npm, delete the `pnpm-lock.yaml` file, install the dependencies with Yarn/npm, change the CI workflow, and Husky Git hooks to use Yarn/npm commands.


