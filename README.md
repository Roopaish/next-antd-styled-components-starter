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

## Folder Structure

```ts
src
├── components
│   ├── ui // Reusable UI components
│   ├── icons // Custom SVG icons
│   ├── *group // Put similar components in a group
│   │   ├── *component
│   │   │   ├── *components.tsx
│   │   │   └── styles.ts // Styles for things under component
│   └── common // Shared components
├── lib
│   ├── utils // Common Utilities
│   │   └── server-only // Server only utilities
│   └── validations // Commonly used validations
├── theme // Theme for antd and styled-components, global styles
├── app // Pages
├── hooks // Custom hooks
│   └── *group // Put similar hooks in a group
├── data // Site data and constants
└── store // Contexts or Zustand stores
    └── *group // Put similar stores in a group
```

## VSCODE Snippets

Add this in snippets > typescriptreact.json. Then in any tsx file, type `rfi` and press tab to generate a new icon component

```json
  ...
 "Generate Icon JSX": {
    "prefix": "rfi",
    "body": [
      "import type { IconProps } from '.';",
      "",
      "export default function ${TM_FILENAME_BASE/(.*)\\..+$/${1:/pascalcase}/}Icon({ size, color, ...rest }: IconProps) {",
      "  return (",
      "    $0",
      "  );",
      "}"
    ],
    "description": "Create Icon Component"
  },
  ...
```
