import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHQL_URI,
  documents: 'src/backend/queries/**/*.ts',
  generates: {
    'src/backend/types/index.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
      /**
       * For more configuration options
       * @see https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-operations
       */
      config: {
        typesPrefix: 'I',
        enumPrefix: false,
        defaultScalarType: 'unknown',
      },
    },
  },
};

export default config;
