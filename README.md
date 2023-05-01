This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started:

Install the dependencies:

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Directory structure

How to place your code into correct directories to make the project structure clear:

- context: React contexts
- graphql: Global GraphQL stuff like fragments reused across multiple files.
- helpers: Utility files used in this folder's components.
- hooks: Hooks that are reused across multiple files. If it's used only once, still better to create a folder or file with the hook name.
- shared: Components to be reused across multiple files down the tree.

Any custom hooks created should be .ts and not .tsx.

