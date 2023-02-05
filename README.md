# NextJs Template (Sanity Version)

This template should be used with a sanity backed that is created using the [sanity starter template](https://github.com/lemon-hive/sanity-starter). It contains helpful components for both backend and frontend, that will help jumpstart the development process.

## Caution

Before deleting the files in this template, it is important to go through the guidelines. This template was created with reusable components that will most like exist in every sanity based project. Only delete if you are sure that the component will not be used.

# Guidelines

## Frontend development

This part is mainly for developers who will be building frontend components in this repository.

- Please use the following reusable components to make refactors easier.
  - custom-image
  - link-wrapper
- When working with rich text. Please define the type of the rich text field in your interface with `ISanityCustomPortableText`, which is defined in `src/backend/types/general/portable-text`. Please use `custom-portable-text` defined in `components` to render the portable text.
- When defining an image for a component please consider the following:
  - Should the image have a fixed height and width? If so, then please export the height and width of the component image as a `const` from the component's interface file.
  - Should the image have one fixed dimension and another variable dimension? This is for situations where you have to maintain the aspect ratio of the image. If so then please, export only the fixed dimension from the interface file of the component. The component should also expect the variable dimension as a field.
  - A component's image should always use the exported dimension values from the components interface file.

## Backend Developers

This part is mainly for the developers who are working on the backend and integrating backend data with frontend components.

For startes you have to be capable of using `groq`. It is sanity's preferred query language and allows us to fully utilize all of sanity's features.

This template contains some helper functions and query fragments to make development easier. It is important you go through the `src/backend` folder.

- Images: Sanity images are very powerful.

  They allow the editor to have hotspots, crops for their images.

  They allow to the developer to render such images easily. They also provide the developer with `lqip` versions of the image.

  There is a `generate-image` folder in `backend`.
  It contains 3 functios that help generate image objects according the frontend needs. It is your job to look at the frontend component interface file and understand which function to use to generate the appropriate image object.

  The functions have appropriate descriptions about their usecases.

- Queries & Fragments: Fragments are core part of writing sanity queries. There are a lot of reusable schemas in sanity. You can create fragments for those schemas to make writing queries a lot easier. This also makes writing interfaces for sanity objects a lot easier.

  There are some examples of the usage of fragments in the `/backend/queries/` folder

- Types and Interfaces: Unfortunately sanity does not yet have a stable codegen process.
  I am not sure if this step is ideal but it makes it easier for me to work.
  I like to define the interface for a schema in `backend/types` folder. These interfaces are a representation of the schema in the backend.

  These interfaces will make it easier to process queries and pass data into the frontend components.
