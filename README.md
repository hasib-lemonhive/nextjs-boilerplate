# NextJs Starter v1.0

Please go through the general [Guidelines](https://github.com/lemon-hive/Guidelines) before proceeding. The instructions written in this readme will build on concepts discussed in the general guidelines.

## Introduction

This is a template [Next.js](https://nextjs.org/) project containing the following tools.

- `NextJS 13`: Our framework of choice.
- `Storybook`: Render and view components.
- `Apollo Graphql`: Interact with graphql backend.
- `Tailwind CSS`: CSS framework of choice.
- `Typescript`: Yes you have to use it.
- `Jest`: Testing Framework
- `Testing-library`: Testing library to facilitate frontend testing
- `Husky`: Runs `pre-commit` and `pre-push` scripts. If husky isn't working please run `npm run prepare`, if that doesn't help then contact your senior dev.

## Content

- [Folder Structure](/README.md#folder-structure)
- [Apollo Graphql](/README.md#apollo-graphql)

## Folder Structure

This project template contains a number of configuration files defining the behavior of linter, typescript, jest, storybook etc.

**If you are not acting as the project lead then please do not modify any configuration files. If there are any issues with the configuration then please let your project lead know.**

The folders you should be mainly concerned about are:

- `src` - This is the main folder you have to be concerned about. This folder will contain components, sections and other project related files.
- `fonts` - This folder will export fonts to be used in the `_app.tsx` file in `pages`
- `pages` - This folder will contain all the pages of the project.
- `public` - This is where NextJS wants you store your asset files. (Images, Videos etc)
- `styles` - This folder will contain the `global.css` file for the project.

**Other folders are will be project configuration related folders.**

This project template was created with the colocation folder structure in mind. See [Colocation](https://kentcdodds.com/blog/colocation). This means all revelant files for a component is stored in the same folder as the component.

Please try to use **absolute** import paths. Some shortcuts are defined in tsconfig, you can use them to make importing easier. Maintaining absolute import paths allows for easy restructuring of files.

The `src` folder will have the following folders:

- `backend` : This folder contains the backend client, types and other related files.
- `components` : Contains individual components that we will use to build sections.
- `sections` : Contains sections built using the components.
- `utils` - This folder will contain any helper function that will be reused in multiple components/sections.
- `types` - This will export interfaces that will be used in multiple components/sections.

**Note** : The `function/interface` we declare in `src/types` or `src/utils` should have a `Global` suffix, i.e `ISectionThemeGlobal`. This is to help refactorers be aware that they are working with a function/interface used across multiple components.

Each frontend component in the `src/sections` or `src/components` folders should contain the following:

**Required**

- `index.tsx` : The file that exports the component.
- `[component].test.tsx` : The test file of the component.
- `[component].stories.tsx` : The storybook file for the component.
- `__snapshots__` : Jest will auto generate this folder when running tests.

**Optional**

- `interface.ts` - If your component uses any **interfaces** or **enums**, they should be stored and exported from here. This file could also include the **interfaces** or **enums** of the functions in the `utils.ts`.
- `mock-data.ts` - If your component needs mock props for testing in jest or rendering on storybook then the mock props should be stored and exported from here.
- `test-config.ts` - If your tests are using parameterization, the configuration arrays should be stored and exported from this file.
- `index.module.scss` - If your component needs a separate stylesheet.
- `sub-components` - This folder will house components that your component will use. Use this folder if your component file is getting too big (over 250 lines). This folder should ideally have 1 or more subfolders which will contain `index.tsx` files exporting the sub component. For example:

```
Card
  .
  .
  .
  index.tsx
  sub-components
    title
      index.tsx
    body
      index.tsx
```

- `utils.ts` - If your component has any functions, they should be stored and exported from here.

## Apollo Graphql

This is used to connect to our graphql backend.

There are different ways to configure apollo client for different next.js render methods (i.e static page generation, server side rendering). This project is created with server-side and static page generation in mind. `_app.tsx` is not wrapped with Apollo Provider.

Key folders

- `src/backend/client`: Contains apollo client configurations along with a link to an article about the different ways to use apollo client with NextJS.

- `src/backed/types`: Contains type definitions of backend entities. This can updated using `npm run codegen`. The following conditions have to be met
  - `src/queries` has to contain atleast one `.ts` file with a valid `gql` query. The query has to be of a valid entity in our backend
  - The backend has to be available.
  - `.env.development.local` has to created and has to contain the correct url for `NEXT_PUBLIC_GRAPHQL_URI`.
