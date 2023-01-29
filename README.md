# NextJs Starter v1.0

**It is important to read through this file before working on this project. Specially the Project Guidelines and Apollo Graphql Section.**

## Getting Started

- Install Docker in your system
- Install vscode
- Install the extension `ms-vscode-remote.remote-containers` in vscode.
- Clone this repository and open it with vscode
- There should be a prompt to reopen with container, if not you can click on the `><` icon at the bottom left of the screen. Then click on the `Reopen in container` option.
- The repo will be reoopned in a container which will install all dependencies, extensions etc.
- You should now be able to run the project.

### Notes

- If you get an error when trying to reopen in container, **retrying** usually fixes the issue. Otherwise you will have to contact to project lead.
- If you are having trouble running `dev` and `storybook`, then you probably need to increase the resources docker is able to use from your system. You can do it from docker desktop or ask your project lead.

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

- [Github Actions](/README.md#github-actions)
- [Project Guidelines](/README.md#project-guidelines)
  - [Branch Naming Conventions](/README.md#branch-naming)
  - [Folder Structure](/README.md#folder-structure)
  - [Typescript](/README.md#typescript)
  - [Coding Practices](/README.md#coding-pratices)
  - [Tailwind](/README.md#tailwind)
  - [Storybook](/README.md#storybook)
  - [Testing](/README.md#testing)
  - [Commits](/README.md#commits)
- [Development Container](/README.md#development-container)
- [Apollo Graphql](/README.md#apollo-graphql)

## Github Actions

This project has three github action files setup in `.github\workflows`. These actions assume that your **production** branch is called **main** and **development** branch is called **develop**. The action files are using the default scripts setup in the templates package.json.

It is the project lead's responsibility to update the action files if the branch naming/package.json scripts are changed.

The actions are setup as follows.

- `main`: This will be triggered when any push is made to the **main** branch (direct/PR merge).
- `develop`: This will be triggered when any push is made to the **develop** branch (direct/PR merge).
- `pr`: This will be triggered when a PR is created against any branch.

The actions are setup to cancel if a new action relating to the same branch is started.

## Project Guidelines

When opening this project on VScode you will asked whether you want to install the recommended extensions. Please do so. The extensions are a part of the project.

## Branch Naming

- `main` : The production branch. The project lead will create a PR against the production branch, from the development branch at the end of each sprint.
- `develop` : The development branch. This the branch against which team members will create a PR when their feature/refactor/hotfix is complete.
- `feature/[jira-ticket-number]` : This is the branch a developer should create when working on a **new** feature/task.
- `refactor/[jira-ticket-number]` : This is the branch a developer should create when doing a **major update** on an existing feature(s).
- `hotfix/[jira-ticket-number]` : This is the branch a developer should create when doing a **minor update** on an existing feature(s).

This branch naming convention will help the project lead prioritize and track PR reviews.

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

### Notes

- We cannot use `pages` in `src` folder because font optimization does not seem to work if we do. This could be a tailwind issue.
- Nextjs will not support test and story files in the `pages` folder. In our development style we should not need page level testing. Incase we do, we have to add additional configuration in `next.config.js`. Please see [Custom Page Extensions](https://nextjs.org/docs/api-reference/next.config.js/custom-page-extensions).

## Typescript

Typescript is the backbone of a good **team** project. You can look up many articles on why Typescript is so popular in production grade projects.

Here are a few rules we like to follow while using typescript:

- Do not use `any` as a type. This makes typescript useless. The project makes use of `eslint` and `tsconfig` rules to make sure that `any` cannot be used. If you find that the project is not enforcing the **no any** rule, then please inform the project lead.
- Do not use the `as` keyword for type assertion unless you are creating `mockdata` for testing purposes.
- Use `interface` keyword when creating a type by defining properties. Use the `type` keyword when creating a type from existing types.

Try to make use of utilities like `Omit`, `Pick` and `<T>` to make types and interfaces reusable. This is something that will come with practice.

## Coding Pratices

- When writing code please remember that your code is meant to be read by the team. It is a common developer trait to submit code as soon the task is complete, but usually in that stage the code is not very readable (clean). The key thing to understand here is `context`. You have all the context about your code but your fellow team member doesn't. This is why you might think your code makes complete sense but in reality it will confuse people. Once you are done implementing your feature, and you are happy with how it renders and behaves. Take a break, drink some coffee/tea/juice, go for a walk etc. When you are back do the following:
  - Skim through your code, don't **read** through it. You are looking for patterns. Repeating Patterns. If you spot any, make them into a reusable variable or function.
  - Look for variable names that are not clear/understandable and change them.
- Try **very hard** to keep the usage of `useEffect` and `useState` to a minimum. It is an annoying pursuit because it forces us to think differently. **But** in a growing project `useEffect` can lead to adverse behavior that becomes hard to to track. If you don't want to annoy the hell out of a future maintainer (could be you yourself) then you should think twice before submitting a PR that contains more than 1 useEffect. React themselves are trying to make developers understand the they are using useEffect the wrong way.
  - [Goodbye, UseEffect](https://www.youtube.com/watch?v=bGzanfKVFeU)
  - [React Beta Docs](https://beta.reactjs.org/)
- If your component becomes very big 250 lines plus, then its a good idea to separate it into chunks. [Folder Structure](/README.md#folder-structure) describes where to put these `sub-components`.
- Use meaningful variable names, its fine if it becomes too long, we would rather have a long human readable name instead of a short incomprehensive one.
- When it comes to commenting one of the things you have to keep in mind is `Will I forget this?` If you feel like this is block of code that is unclear then you can include a comment that describes what the block of code is doing. Please do not provide comments for code that is easy to interpret/straighforward. Please use the style of commenting shown in the example.

```typescript
/**
 * This function accepts a string, does weird things and
 * returns nothing.
 */
function weirdFunction(arg: string) {
  /_ ...doWeirdThings _/;
}
```

- Another reason to add comments is when adding a `TODO`. This is to make sure that you (in the future) or your colleague knows that there is still some work left to be done.

```typescript
/**
 * TODO: Implement category wise searching
 */
```

## Tailwind

- Common tailwind classes in a component should be extracted in a `const/var`. This will make it easier to update design by updating one variable. Only do this if you are sure all components using this class should be updated when design changes are made.
  - When extracting tailwind classes to variables/constants please use the suffix `CSS` at the end of the variable name. For example `const headerContainerCSS = "flex..."`
- We should try to include most of our styles in our `tsx` file.
- We should use `module.scss` for conditional css classes.

## Storybook

This project uses the beta version of storybook 7. This was necessary because Storybook 6 does not support `next/font` optimizations.

Please make sure you are viewing `7.0` documentation when looking at storybook docs.

Stories are now written in CSF 3.0 format. You can learn more [here (7.0 Beta Docs)](https://storybook.js.org/docs/7.0/react/writing-stories/introduction).

> You might notice a `docs` with all your stories. Currently we not have any guidelines on how to use them. Once we do, this section will be updated. You can ignore them for now.

Please study the storybook examples provided in this template. Your storybook should follow these rules:

- Stories for sections should use `layout: 'fullscreen'`. Please look at the section story examples.
- If your component renders differently based on props then you will have to provide a story for each scenario. For exmaple if you implemented a section that contains a grid of cards, showing 4 cards per row. You should have the following stories:
  - Section with No cards (if it is possible to pass no cards to this section)
  - Section with 1 card
  - Section with 4 cards
  - Section with 5 cards
- If your component renders different content based on props then you will need to provide a story for every scenario. For example:
  - Component with no data.
  - Component with data loading.
  - Component with error.
- Storybook should not contain controls for component props that an editor does not control, please look a this resource and search for the `disable` keyword, [Setting up or disabling controls](https://storybook.js.org/docs/7.0/react/essentials/controls)

## Testing

There are many opinions on testing. From our experience we have realised that its best to not get lost in this rabbit hole.

We have decided on the following approach for testing.

**For Components**

- Render your component on storybook and check its responsiveness and interactions. If it passes the requirements **then** write a snapshot test.
- If the components render is effected by props for example the component renders the icon passed to it, then run parameterized snapshot tests.
  - **Note**: In the case of props that contain **content (text, array of cards etc)**, you don't always have to run multiple snapshot tests. You need to take snapshot tests if content changes causes **different elements to render**. For example if you component renders a "Content Not Found" image if the content prop is undefined/empty.
- If the component calls methods when the user interacts with it then, you will have to simulate the behavior and test if the methods are being called.

The key here is to only write snapshot tests when you have verified that the component looks and behaves as required.

**For Functions**

- Write parameterized tests to check the output of your function. Make sure to account for all edge cases, then write your function

A keen eye will notice we are following test driven development for functions but not for components. This is essentially because TDD for components is too time consuming, snapshot tests fail if the component render changes and that will capture all interation changes that don't call methods.

## Commits

The way we commit makes tracking and reverting mistakes easier. Always try to make small commits.

When a feature is complete commit the file, when the test for the feature is complete commit the test file.

Please **do not** commit multiple files containing large amount of **non related** changes together. This will make it very difficult to revert a faulty/unwanted change.

This is only acceptable if all the changes have a common theme for example, an update in a components `interface` will require you to update it's `index`, `story` and `test` files, you can group these changes into one commit.

It is also recommended to make your commit statements short and **meaningful**. If you make commits for short changes then this should be relatively easy. You just have to describe in a few words what you changed/created in the file you are committing.

## Development Container

This project has docker and docker-compose files for containerized development.

Using dockerized developments gives the project lead the ability to control the dev environment for the project. If setup correctly, this will provide the following benefits:

- The dev team should not have to worry about development issues resulting from their personal pc environment.
- This will also ensure all necessary extensions are being run and used in the same way for every dev team member.
- The submitted PRs will have consistent file formatting.
- The dev team should not have to worry about global and project level dependencies. Everything should be setup in the container.

**Please note that for some systems you have to increase the resources docker can use.**

## Apollo Graphql

This is used to connect to our graphql backend.

There are different ways to configure apollo client for different next.js render methods (i.e static page generation, server side rendering). This project is created with server-side and static page generation in mind. `_app.tsx` is not wrapped with Apollo Provider.

Key folders

- `src/backend/client`: Contains apollo client configurations along with a link to an article about the different ways to use apollo client with NextJS.

- `src/backed/types`: Contains type definitions of backend entities. This can updated using `npm run codegen`. The following conditions have to be met
  - `src/queries` has to contain atleast one `.ts` file with a valid `gql` query. The query has to be of a valid entity in our backend
  - The backend has to be available.
  - `.env.development.local` has to created and has to contain the correct url for `NEXT_PUBLIC_GRAPHQL_URI`.
