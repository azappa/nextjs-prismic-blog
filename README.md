# Prismic Next.js Blog Site Example

Based [on work by Prismic team](https://github.com/prismicio/nextjs-blog) I've integrated [Next.js](https://nextjs.org/) with [styled-components](https://styled-components.com/) as CSS library and [Prismic.io](https://prismic.io). I've also installed [eslint](https://eslint.org/) and [Prettier](https://prettier.io/) used during development.

### How to setup

Create a new project on Prismic creating custom types from `custom_types` folder: React components will use those structures so if you want to create a new custom type or have a different structure you must adapt components to it (or you can create new components to handle your data).

After you created some content on Prismic edit `prismic-configuration.js` file with the url of your Prismic repository.

By running the command `yarn dev` you are starting development server (located at `localhost:3000`).
