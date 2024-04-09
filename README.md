# Next Antd Styled-Components Starter using the App directory

## Includes

- Reusable UI components and theming
- Theming and SSR support using styled-components and antd
- Prettier And Eslint setup
- Husky setup to format and lint files before committing

## Notes

- When using styled-component, mark the file with `'use client'`
- Always use `shouldNotForwardPropsWithKeys` (/lib/styled.ts), to avoid styled components custom props to end up in the DOM
- Follow the structure as it is now

## Getting Started

- `npm i -g yarn`
- `yarn install`
- For linux Only: `chmod ug+x .husky/*`,
- `yarn dev`
