import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://demo.vendure.io/shop-api",
  documents: ["src/**/*.tsx", "src/**/*.ts", "src/**/*.graphql"],
  generates: {
    "src/api/gql/": {
      preset: "client",
      plugins: [],
    },
  },
}

export default config
