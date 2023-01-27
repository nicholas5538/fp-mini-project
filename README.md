# React mini-project

[![Node Version](https://img.shields.io/badge/Node-19.3.0-brightgreen.svg)](https://github.com/nicholas5538/fp-mini-project/blob/main/package.json#L7)
![Mac OS](https://img.shields.io/badge/DevelopedOn-MacOS-red.svg)

Description:

1. Setup a React SPA from scratch
2. Create Page skeleton - App bar, sidebar
3. Use React Router to allow navigation between pages
4. Setup unit testing

## Getting Started

### Environment Setup

-   Add a new SSH key to your GitHub account. [Instructions to how to generate](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

-   Install the version of node specified in the `.nvmrc` file of this repo.

    > 💁 **Tip:** You can use [nvm](https://github.com/nvm-sh/nvm) to easily manage multiple versions of node. Once installed, run `nvm use` in the project directory to use our configured version.

-   Install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
    > 💁 `npm install --global yarn`

### Repository Setup

Once you have your SSH key added and environment setup, you can clone the repository and install the dependencies.

```zsh
git clone git@github.com:nicholas5538/fp-mini-project.git
cd fp-mini-project
yarn install
```

## Developing

Once your [environment setup](#environment-setup), you're ready to start developing. Starting the development environment is managed by the following command.

```sh
yarn dev
```

The `dev` command will start the application in your local environment.

### Frequently Used Scripts

In addition to the `dev` command, there are other scripts available in the package.json. Some of the most common you might get to use are:

-   `yarn test` - Runs unit tests

    > vitest starts in watch mode by default in development environment and run mode in CI environment (when process.env.CI presents) smartly.

    > 💁 **Tip:** use `yarn test watch` or `yarn test run` to explicitly specify the desired mode

-   `yarn format` - Check prettier formatting through all the codes
    > 💁 **Tip:** use `yarn format:fix` to run auto prettier formatting across all the codes
-   `yarn lint` - Runs TS linter through all the codes

## Additional Documentation

-   [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)
-   [Tailwindcss styling](https://tailwindcss.com/docs/installation)
-   [Framer Motion](https://www.framer.com/motion/)
-   [headlessui](https://headlessui.com)
