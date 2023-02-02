import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: unknown;
  DateTime: unknown;
  JSON: unknown;
};

export type ISanityBlock = {
  __typename?: 'Block';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  children: Maybe<Array<Maybe<ISanitySpan>>>;
  list: Maybe<Scalars['String']>;
  style: Maybe<Scalars['String']>;
};

export type ISanityBooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq: InputMaybe<Scalars['Boolean']>;
  /** Checks if the value is not equal to the given input. */
  neq: InputMaybe<Scalars['Boolean']>;
};

export type ISanityCustomBlock = {
  __typename?: 'CustomBlock';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  children: Maybe<Array<Maybe<ISanitySpan>>>;
  list: Maybe<Scalars['String']>;
  style: Maybe<Scalars['String']>;
};

export type ISanityCustomBlockFilter = {
  _key: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  list: InputMaybe<ISanityStringFilter>;
  style: InputMaybe<ISanityStringFilter>;
};

export type ISanityCustomBlockOrCustomImageSchemaOrCustomVideoSchemaOrInternalBlock = ISanityCustomBlock | ISanityCustomImageSchema | ISanityCustomVideoSchema | ISanityInternalBlock;

export type ISanityCustomBlockSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  list: InputMaybe<SortOrder>;
  style: InputMaybe<SortOrder>;
};

export type ISanityCustomImageSchema = {
  __typename?: 'CustomImageSchema';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  /** Alternate description for image. (Important for SEO) */
  altDescription: Maybe<Scalars['String']>;
  figcaption: Maybe<Scalars['String']>;
  imageFile: Maybe<ISanityImage>;
};

export type ISanityCustomImageSchemaFilter = {
  _key: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  altDescription: InputMaybe<ISanityStringFilter>;
  figcaption: InputMaybe<ISanityStringFilter>;
  imageFile: InputMaybe<ISanityImageFilter>;
};

export type ISanityCustomImageSchemaSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  altDescription: InputMaybe<SortOrder>;
  figcaption: InputMaybe<SortOrder>;
  imageFile: InputMaybe<ISanityImageSorting>;
};

export type ISanityCustomVideoSchema = {
  __typename?: 'CustomVideoSchema';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  /** Alternate description for image. (Important for SEO) */
  altDescription: Maybe<Scalars['String']>;
  figcaption: Maybe<Scalars['String']>;
  imageFile: Maybe<ISanityImage>;
  /** Please provide and embeddable video link. */
  videoUrl: Maybe<Scalars['String']>;
};

export type ISanityCustomVideoSchemaFilter = {
  _key: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  altDescription: InputMaybe<ISanityStringFilter>;
  figcaption: InputMaybe<ISanityStringFilter>;
  imageFile: InputMaybe<ISanityImageFilter>;
  videoUrl: InputMaybe<ISanityStringFilter>;
};

export type ISanityCustomVideoSchemaSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  altDescription: InputMaybe<SortOrder>;
  figcaption: InputMaybe<SortOrder>;
  imageFile: InputMaybe<ISanityImageSorting>;
  videoUrl: InputMaybe<SortOrder>;
};

export type ISanityDateFilter = {
  /** Checks if the value is equal to the given input. */
  eq: InputMaybe<Scalars['Date']>;
  /** Checks if the value is greater than the given input. */
  gt: InputMaybe<Scalars['Date']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte: InputMaybe<Scalars['Date']>;
  /** Checks if the value is lesser than the given input. */
  lt: InputMaybe<Scalars['Date']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte: InputMaybe<Scalars['Date']>;
  /** Checks if the value is not equal to the given input. */
  neq: InputMaybe<Scalars['Date']>;
};

export type ISanityDatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is greater than the given input. */
  gt: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than the given input. */
  lt: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is not equal to the given input. */
  neq: InputMaybe<Scalars['DateTime']>;
};

/** A Sanity document */
export type ISanityDocument = {
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']>;
  /** Document type */
  _type: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']>;
};

export type ISanityDocumentFilter = {
  /** Apply filters on document level */
  _: InputMaybe<ISanitySanity_DocumentFilter>;
  _createdAt: InputMaybe<ISanityDatetimeFilter>;
  _id: InputMaybe<ISanityIdFilter>;
  _rev: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  _updatedAt: InputMaybe<ISanityDatetimeFilter>;
};

export type ISanityDocumentSorting = {
  _createdAt: InputMaybe<SortOrder>;
  _id: InputMaybe<SortOrder>;
  _rev: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  _updatedAt: InputMaybe<SortOrder>;
};

export type ISanityDog = ISanityDocument & {
  __typename?: 'Dog';
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']>;
  _key: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']>;
  /** Document type */
  _type: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']>;
  /** The breed of the dog */
  breed: Maybe<Scalars['String']>;
  customImageSchema: Maybe<ISanityCustomImageSchema>;
  customPortableTextRaw: Maybe<Scalars['JSON']>;
  /** This input is restricted because all dogs are good dogs. */
  isGoodDog: Maybe<Scalars['Boolean']>;
  /** The name of the dog */
  name: Maybe<Scalars['String']>;
};

export type ISanityDogFilter = {
  /** Apply filters on document level */
  _: InputMaybe<ISanitySanity_DocumentFilter>;
  _createdAt: InputMaybe<ISanityDatetimeFilter>;
  _id: InputMaybe<ISanityIdFilter>;
  _key: InputMaybe<ISanityStringFilter>;
  _rev: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  _updatedAt: InputMaybe<ISanityDatetimeFilter>;
  breed: InputMaybe<ISanityStringFilter>;
  customImageSchema: InputMaybe<ISanityCustomImageSchemaFilter>;
  isGoodDog: InputMaybe<ISanityBooleanFilter>;
  name: InputMaybe<ISanityStringFilter>;
};

export type ISanityDogSorting = {
  _createdAt: InputMaybe<SortOrder>;
  _id: InputMaybe<SortOrder>;
  _key: InputMaybe<SortOrder>;
  _rev: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  _updatedAt: InputMaybe<SortOrder>;
  breed: InputMaybe<SortOrder>;
  customImageSchema: InputMaybe<ISanityCustomImageSchemaSorting>;
  isGoodDog: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
};

export type ISanityFile = {
  __typename?: 'File';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  asset: Maybe<ISanitySanityFileAsset>;
};

export type ISanityFileFilter = {
  _key: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  asset: InputMaybe<ISanitySanityFileAssetFilter>;
};

export type ISanityFileSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
};

export type ISanityFloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq: InputMaybe<Scalars['Float']>;
  /** Checks if the value is greater than the given input. */
  gt: InputMaybe<Scalars['Float']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte: InputMaybe<Scalars['Float']>;
  /** Checks if the value is lesser than the given input. */
  lt: InputMaybe<Scalars['Float']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte: InputMaybe<Scalars['Float']>;
  /** Checks if the value is not equal to the given input. */
  neq: InputMaybe<Scalars['Float']>;
};

export type ISanityGeopoint = {
  __typename?: 'Geopoint';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  alt: Maybe<Scalars['Float']>;
  lat: Maybe<Scalars['Float']>;
  lng: Maybe<Scalars['Float']>;
};

export type ISanityGeopointFilter = {
  _key: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  alt: InputMaybe<ISanityFloatFilter>;
  lat: InputMaybe<ISanityFloatFilter>;
  lng: InputMaybe<ISanityFloatFilter>;
};

export type ISanityGeopointSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  alt: InputMaybe<SortOrder>;
  lat: InputMaybe<SortOrder>;
  lng: InputMaybe<SortOrder>;
};

export type ISanityIdFilter = {
  /** Checks if the value is equal to the given input. */
  eq: InputMaybe<Scalars['ID']>;
  in: InputMaybe<Array<Scalars['ID']>>;
  /** Checks if the value matches the given word/words. */
  matches: InputMaybe<Scalars['ID']>;
  /** Checks if the value is not equal to the given input. */
  neq: InputMaybe<Scalars['ID']>;
  nin: InputMaybe<Array<Scalars['ID']>>;
};

export type ISanityImage = {
  __typename?: 'Image';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  asset: Maybe<ISanitySanityImageAsset>;
  crop: Maybe<ISanitySanityImageCrop>;
  hotspot: Maybe<ISanitySanityImageHotspot>;
};

export type ISanityImageFilter = {
  _key: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  asset: InputMaybe<ISanitySanityImageAssetFilter>;
  crop: InputMaybe<ISanitySanityImageCropFilter>;
  hotspot: InputMaybe<ISanitySanityImageHotspotFilter>;
};

export type ISanityImageSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  crop: InputMaybe<ISanitySanityImageCropSorting>;
  hotspot: InputMaybe<ISanitySanityImageHotspotSorting>;
};

export type ISanityIntFilter = {
  /** Checks if the value is equal to the given input. */
  eq: InputMaybe<Scalars['Int']>;
  /** Checks if the value is greater than the given input. */
  gt: InputMaybe<Scalars['Int']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte: InputMaybe<Scalars['Int']>;
  /** Checks if the value is lesser than the given input. */
  lt: InputMaybe<Scalars['Int']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte: InputMaybe<Scalars['Int']>;
  /** Checks if the value is not equal to the given input. */
  neq: InputMaybe<Scalars['Int']>;
};

export type ISanityInternalBlock = {
  __typename?: 'InternalBlock';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  contentRaw: Maybe<Scalars['JSON']>;
};

export type ISanityInternalBlockFilter = {
  _key: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
};

export type ISanityInternalBlockSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
};

export type ISanityOptionalLink = {
  __typename?: 'OptionalLink';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  /** Please provide the external link. Note: Use https */
  externalLink: Maybe<Scalars['String']>;
  /** Enabling this option will render a link as a (button/anchor) in the frontend. */
  hasLink: Maybe<Scalars['Boolean']>;
  /** Please select a document to link. Hint: Use the search bar to search by the title of the document. */
  internalLink: Maybe<ISanityPage>;
  /** Would you like to link a relative page or external link? */
  linkType: Maybe<Scalars['String']>;
  /** Please provide the link text. */
  text: Maybe<Scalars['String']>;
};

export type ISanityOptionalLinkFilter = {
  _key: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  externalLink: InputMaybe<ISanityStringFilter>;
  hasLink: InputMaybe<ISanityBooleanFilter>;
  internalLink: InputMaybe<ISanityPageFilter>;
  linkType: InputMaybe<ISanityStringFilter>;
  text: InputMaybe<ISanityStringFilter>;
};

export type ISanityOptionalLinkSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  externalLink: InputMaybe<SortOrder>;
  hasLink: InputMaybe<SortOrder>;
  linkType: InputMaybe<SortOrder>;
  text: InputMaybe<SortOrder>;
};

export type ISanityPage = ISanityDocument & {
  __typename?: 'Page';
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']>;
  _key: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']>;
  /** Document type */
  _type: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']>;
  anotherRequiredLink: Maybe<ISanityRequiredLink>;
  customPortableTextRaw: Maybe<Scalars['JSON']>;
  optionalLink: Maybe<ISanityOptionalLink>;
  pagetitle: Maybe<Scalars['String']>;
  requiredLink: Maybe<ISanityRequiredLink>;
  slug: Maybe<ISanitySlug>;
};

export type ISanityPageFilter = {
  /** Apply filters on document level */
  _: InputMaybe<ISanitySanity_DocumentFilter>;
  _createdAt: InputMaybe<ISanityDatetimeFilter>;
  _id: InputMaybe<ISanityIdFilter>;
  _key: InputMaybe<ISanityStringFilter>;
  _rev: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  _updatedAt: InputMaybe<ISanityDatetimeFilter>;
  anotherRequiredLink: InputMaybe<ISanityRequiredLinkFilter>;
  optionalLink: InputMaybe<ISanityOptionalLinkFilter>;
  pagetitle: InputMaybe<ISanityStringFilter>;
  requiredLink: InputMaybe<ISanityRequiredLinkFilter>;
  slug: InputMaybe<ISanitySlugFilter>;
};

export type ISanityPageSorting = {
  _createdAt: InputMaybe<SortOrder>;
  _id: InputMaybe<SortOrder>;
  _key: InputMaybe<SortOrder>;
  _rev: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  _updatedAt: InputMaybe<SortOrder>;
  anotherRequiredLink: InputMaybe<ISanityRequiredLinkSorting>;
  optionalLink: InputMaybe<ISanityOptionalLinkSorting>;
  pagetitle: InputMaybe<SortOrder>;
  requiredLink: InputMaybe<ISanityRequiredLinkSorting>;
  slug: InputMaybe<ISanitySlugSorting>;
};

export type ISanityRequiredLink = {
  __typename?: 'RequiredLink';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  /** Please provide the external link. Note: Use https */
  externalLink: Maybe<Scalars['String']>;
  /** Please select a document to link. Hint: Use the search bar to search by the title of the document. */
  internalLink: Maybe<ISanityPage>;
  /** Would you like to link a relative page or external link? */
  linkType: Maybe<Scalars['String']>;
  /** Please provide the link text. */
  text: Maybe<Scalars['String']>;
};

export type ISanityRequiredLinkFilter = {
  _key: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  externalLink: InputMaybe<ISanityStringFilter>;
  internalLink: InputMaybe<ISanityPageFilter>;
  linkType: InputMaybe<ISanityStringFilter>;
  text: InputMaybe<ISanityStringFilter>;
};

export type ISanityRequiredLinkSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  externalLink: InputMaybe<SortOrder>;
  linkType: InputMaybe<SortOrder>;
  text: InputMaybe<SortOrder>;
};

export type ISanityRootQuery = {
  __typename?: 'RootQuery';
  Document: Maybe<ISanityDocument>;
  Dog: Maybe<ISanityDog>;
  Page: Maybe<ISanityPage>;
  SanityFileAsset: Maybe<ISanitySanityFileAsset>;
  SanityImageAsset: Maybe<ISanitySanityImageAsset>;
  allDocument: Array<ISanityDocument>;
  allDog: Array<ISanityDog>;
  allPage: Array<ISanityPage>;
  allSanityFileAsset: Array<ISanitySanityFileAsset>;
  allSanityImageAsset: Array<ISanitySanityImageAsset>;
};


export type ISanityRootQueryDocumentArgs = {
  id: Scalars['ID'];
};


export type ISanityRootQueryDogArgs = {
  id: Scalars['ID'];
};


export type ISanityRootQueryPageArgs = {
  id: Scalars['ID'];
};


export type ISanityRootQuerySanityFileAssetArgs = {
  id: Scalars['ID'];
};


export type ISanityRootQuerySanityImageAssetArgs = {
  id: Scalars['ID'];
};


export type ISanityRootQueryAllDocumentArgs = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<ISanityDocumentSorting>>;
  where: InputMaybe<ISanityDocumentFilter>;
};


export type ISanityRootQueryAllDogArgs = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<ISanityDogSorting>>;
  where: InputMaybe<ISanityDogFilter>;
};


export type ISanityRootQueryAllPageArgs = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<ISanityPageSorting>>;
  where: InputMaybe<ISanityPageFilter>;
};


export type ISanityRootQueryAllSanityFileAssetArgs = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<ISanitySanityFileAssetSorting>>;
  where: InputMaybe<ISanitySanityFileAssetFilter>;
};


export type ISanityRootQueryAllSanityImageAssetArgs = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<ISanitySanityImageAssetSorting>>;
  where: InputMaybe<ISanitySanityImageAssetFilter>;
};

export type ISanitySanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id: Maybe<Scalars['String']>;
  /** A canonical name for the source this asset is originating from */
  name: Maybe<Scalars['String']>;
  /** A URL to find more information about this asset in the originating source */
  url: Maybe<Scalars['String']>;
};

export type ISanitySanityAssetSourceDataFilter = {
  _key: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  id: InputMaybe<ISanityStringFilter>;
  name: InputMaybe<ISanityStringFilter>;
  url: InputMaybe<ISanityStringFilter>;
};

export type ISanitySanityAssetSourceDataSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  url: InputMaybe<SortOrder>;
};

export type ISanitySanityFileAsset = ISanityDocument & {
  __typename?: 'SanityFileAsset';
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']>;
  _key: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']>;
  /** Document type */
  _type: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']>;
  altText: Maybe<Scalars['String']>;
  assetId: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  extension: Maybe<Scalars['String']>;
  label: Maybe<Scalars['String']>;
  mimeType: Maybe<Scalars['String']>;
  originalFilename: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  sha1hash: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Float']>;
  source: Maybe<ISanitySanityAssetSourceData>;
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type ISanitySanityFileAssetFilter = {
  /** Apply filters on document level */
  _: InputMaybe<ISanitySanity_DocumentFilter>;
  _createdAt: InputMaybe<ISanityDatetimeFilter>;
  _id: InputMaybe<ISanityIdFilter>;
  _key: InputMaybe<ISanityStringFilter>;
  _rev: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  _updatedAt: InputMaybe<ISanityDatetimeFilter>;
  altText: InputMaybe<ISanityStringFilter>;
  assetId: InputMaybe<ISanityStringFilter>;
  description: InputMaybe<ISanityStringFilter>;
  extension: InputMaybe<ISanityStringFilter>;
  label: InputMaybe<ISanityStringFilter>;
  mimeType: InputMaybe<ISanityStringFilter>;
  originalFilename: InputMaybe<ISanityStringFilter>;
  path: InputMaybe<ISanityStringFilter>;
  sha1hash: InputMaybe<ISanityStringFilter>;
  size: InputMaybe<ISanityFloatFilter>;
  source: InputMaybe<ISanitySanityAssetSourceDataFilter>;
  title: InputMaybe<ISanityStringFilter>;
  url: InputMaybe<ISanityStringFilter>;
};

export type ISanitySanityFileAssetSorting = {
  _createdAt: InputMaybe<SortOrder>;
  _id: InputMaybe<SortOrder>;
  _key: InputMaybe<SortOrder>;
  _rev: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  _updatedAt: InputMaybe<SortOrder>;
  altText: InputMaybe<SortOrder>;
  assetId: InputMaybe<SortOrder>;
  description: InputMaybe<SortOrder>;
  extension: InputMaybe<SortOrder>;
  label: InputMaybe<SortOrder>;
  mimeType: InputMaybe<SortOrder>;
  originalFilename: InputMaybe<SortOrder>;
  path: InputMaybe<SortOrder>;
  sha1hash: InputMaybe<SortOrder>;
  size: InputMaybe<SortOrder>;
  source: InputMaybe<ISanitySanityAssetSourceDataSorting>;
  title: InputMaybe<SortOrder>;
  url: InputMaybe<SortOrder>;
};

export type ISanitySanityImageAsset = ISanityDocument & {
  __typename?: 'SanityImageAsset';
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id: Maybe<Scalars['ID']>;
  _key: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']>;
  /** Document type */
  _type: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']>;
  altText: Maybe<Scalars['String']>;
  assetId: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  extension: Maybe<Scalars['String']>;
  label: Maybe<Scalars['String']>;
  metadata: Maybe<ISanitySanityImageMetadata>;
  mimeType: Maybe<Scalars['String']>;
  originalFilename: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  sha1hash: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Float']>;
  source: Maybe<ISanitySanityAssetSourceData>;
  title: Maybe<Scalars['String']>;
  uploadId: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type ISanitySanityImageAssetFilter = {
  /** Apply filters on document level */
  _: InputMaybe<ISanitySanity_DocumentFilter>;
  _createdAt: InputMaybe<ISanityDatetimeFilter>;
  _id: InputMaybe<ISanityIdFilter>;
  _key: InputMaybe<ISanityStringFilter>;
  _rev: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  _updatedAt: InputMaybe<ISanityDatetimeFilter>;
  altText: InputMaybe<ISanityStringFilter>;
  assetId: InputMaybe<ISanityStringFilter>;
  description: InputMaybe<ISanityStringFilter>;
  extension: InputMaybe<ISanityStringFilter>;
  label: InputMaybe<ISanityStringFilter>;
  metadata: InputMaybe<ISanitySanityImageMetadataFilter>;
  mimeType: InputMaybe<ISanityStringFilter>;
  originalFilename: InputMaybe<ISanityStringFilter>;
  path: InputMaybe<ISanityStringFilter>;
  sha1hash: InputMaybe<ISanityStringFilter>;
  size: InputMaybe<ISanityFloatFilter>;
  source: InputMaybe<ISanitySanityAssetSourceDataFilter>;
  title: InputMaybe<ISanityStringFilter>;
  uploadId: InputMaybe<ISanityStringFilter>;
  url: InputMaybe<ISanityStringFilter>;
};

export type ISanitySanityImageAssetSorting = {
  _createdAt: InputMaybe<SortOrder>;
  _id: InputMaybe<SortOrder>;
  _key: InputMaybe<SortOrder>;
  _rev: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  _updatedAt: InputMaybe<SortOrder>;
  altText: InputMaybe<SortOrder>;
  assetId: InputMaybe<SortOrder>;
  description: InputMaybe<SortOrder>;
  extension: InputMaybe<SortOrder>;
  label: InputMaybe<SortOrder>;
  metadata: InputMaybe<ISanitySanityImageMetadataSorting>;
  mimeType: InputMaybe<SortOrder>;
  originalFilename: InputMaybe<SortOrder>;
  path: InputMaybe<SortOrder>;
  sha1hash: InputMaybe<SortOrder>;
  size: InputMaybe<SortOrder>;
  source: InputMaybe<ISanitySanityAssetSourceDataSorting>;
  title: InputMaybe<SortOrder>;
  uploadId: InputMaybe<SortOrder>;
  url: InputMaybe<SortOrder>;
};

export type ISanitySanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  bottom: Maybe<Scalars['Float']>;
  left: Maybe<Scalars['Float']>;
  right: Maybe<Scalars['Float']>;
  top: Maybe<Scalars['Float']>;
};

export type ISanitySanityImageCropFilter = {
  _key: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  bottom: InputMaybe<ISanityFloatFilter>;
  left: InputMaybe<ISanityFloatFilter>;
  right: InputMaybe<ISanityFloatFilter>;
  top: InputMaybe<ISanityFloatFilter>;
};

export type ISanitySanityImageCropSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  bottom: InputMaybe<SortOrder>;
  left: InputMaybe<SortOrder>;
  right: InputMaybe<SortOrder>;
  top: InputMaybe<SortOrder>;
};

export type ISanitySanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  aspectRatio: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
};

export type ISanitySanityImageDimensionsFilter = {
  _key: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  aspectRatio: InputMaybe<ISanityFloatFilter>;
  height: InputMaybe<ISanityFloatFilter>;
  width: InputMaybe<ISanityFloatFilter>;
};

export type ISanitySanityImageDimensionsSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  aspectRatio: InputMaybe<SortOrder>;
  height: InputMaybe<SortOrder>;
  width: InputMaybe<SortOrder>;
};

export type ISanitySanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
  x: Maybe<Scalars['Float']>;
  y: Maybe<Scalars['Float']>;
};

export type ISanitySanityImageHotspotFilter = {
  _key: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  height: InputMaybe<ISanityFloatFilter>;
  width: InputMaybe<ISanityFloatFilter>;
  x: InputMaybe<ISanityFloatFilter>;
  y: InputMaybe<ISanityFloatFilter>;
};

export type ISanitySanityImageHotspotSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  height: InputMaybe<SortOrder>;
  width: InputMaybe<SortOrder>;
  x: InputMaybe<SortOrder>;
  y: InputMaybe<SortOrder>;
};

export type ISanitySanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  blurHash: Maybe<Scalars['String']>;
  dimensions: Maybe<ISanitySanityImageDimensions>;
  hasAlpha: Maybe<Scalars['Boolean']>;
  isOpaque: Maybe<Scalars['Boolean']>;
  location: Maybe<ISanityGeopoint>;
  lqip: Maybe<Scalars['String']>;
  palette: Maybe<ISanitySanityImagePalette>;
};

export type ISanitySanityImageMetadataFilter = {
  _key: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  blurHash: InputMaybe<ISanityStringFilter>;
  dimensions: InputMaybe<ISanitySanityImageDimensionsFilter>;
  hasAlpha: InputMaybe<ISanityBooleanFilter>;
  isOpaque: InputMaybe<ISanityBooleanFilter>;
  location: InputMaybe<ISanityGeopointFilter>;
  lqip: InputMaybe<ISanityStringFilter>;
  palette: InputMaybe<ISanitySanityImagePaletteFilter>;
};

export type ISanitySanityImageMetadataSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  blurHash: InputMaybe<SortOrder>;
  dimensions: InputMaybe<ISanitySanityImageDimensionsSorting>;
  hasAlpha: InputMaybe<SortOrder>;
  isOpaque: InputMaybe<SortOrder>;
  location: InputMaybe<ISanityGeopointSorting>;
  lqip: InputMaybe<SortOrder>;
  palette: InputMaybe<ISanitySanityImagePaletteSorting>;
};

export type ISanitySanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  darkMuted: Maybe<ISanitySanityImagePaletteSwatch>;
  darkVibrant: Maybe<ISanitySanityImagePaletteSwatch>;
  dominant: Maybe<ISanitySanityImagePaletteSwatch>;
  lightMuted: Maybe<ISanitySanityImagePaletteSwatch>;
  lightVibrant: Maybe<ISanitySanityImagePaletteSwatch>;
  muted: Maybe<ISanitySanityImagePaletteSwatch>;
  vibrant: Maybe<ISanitySanityImagePaletteSwatch>;
};

export type ISanitySanityImagePaletteFilter = {
  _key: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  darkMuted: InputMaybe<ISanitySanityImagePaletteSwatchFilter>;
  darkVibrant: InputMaybe<ISanitySanityImagePaletteSwatchFilter>;
  dominant: InputMaybe<ISanitySanityImagePaletteSwatchFilter>;
  lightMuted: InputMaybe<ISanitySanityImagePaletteSwatchFilter>;
  lightVibrant: InputMaybe<ISanitySanityImagePaletteSwatchFilter>;
  muted: InputMaybe<ISanitySanityImagePaletteSwatchFilter>;
  vibrant: InputMaybe<ISanitySanityImagePaletteSwatchFilter>;
};

export type ISanitySanityImagePaletteSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  darkMuted: InputMaybe<ISanitySanityImagePaletteSwatchSorting>;
  darkVibrant: InputMaybe<ISanitySanityImagePaletteSwatchSorting>;
  dominant: InputMaybe<ISanitySanityImagePaletteSwatchSorting>;
  lightMuted: InputMaybe<ISanitySanityImagePaletteSwatchSorting>;
  lightVibrant: InputMaybe<ISanitySanityImagePaletteSwatchSorting>;
  muted: InputMaybe<ISanitySanityImagePaletteSwatchSorting>;
  vibrant: InputMaybe<ISanitySanityImagePaletteSwatchSorting>;
};

export type ISanitySanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  background: Maybe<Scalars['String']>;
  foreground: Maybe<Scalars['String']>;
  population: Maybe<Scalars['Float']>;
  title: Maybe<Scalars['String']>;
};

export type ISanitySanityImagePaletteSwatchFilter = {
  _key: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  background: InputMaybe<ISanityStringFilter>;
  foreground: InputMaybe<ISanityStringFilter>;
  population: InputMaybe<ISanityFloatFilter>;
  title: InputMaybe<ISanityStringFilter>;
};

export type ISanitySanityImagePaletteSwatchSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  background: InputMaybe<SortOrder>;
  foreground: InputMaybe<SortOrder>;
  population: InputMaybe<SortOrder>;
  title: InputMaybe<SortOrder>;
};

export type ISanitySanity_DocumentFilter = {
  /** All documents that are drafts. */
  is_draft: InputMaybe<Scalars['Boolean']>;
  /** All documents referencing the given document ID. */
  references: InputMaybe<Scalars['ID']>;
};

export type ISanitySlug = {
  __typename?: 'Slug';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  current: Maybe<Scalars['String']>;
  source: Maybe<Scalars['String']>;
};

export type ISanitySlugFilter = {
  _key: InputMaybe<ISanityStringFilter>;
  _type: InputMaybe<ISanityStringFilter>;
  current: InputMaybe<ISanityStringFilter>;
  source: InputMaybe<ISanityStringFilter>;
};

export type ISanitySlugSorting = {
  _key: InputMaybe<SortOrder>;
  _type: InputMaybe<SortOrder>;
  current: InputMaybe<SortOrder>;
  source: InputMaybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC'
}

export type ISanitySpan = {
  __typename?: 'Span';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  marks: Maybe<Array<Maybe<Scalars['String']>>>;
  text: Maybe<Scalars['String']>;
};

export type ISanityStringFilter = {
  /** Checks if the value is equal to the given input. */
  eq: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  /** Checks if the value matches the given word/words. */
  matches: InputMaybe<Scalars['String']>;
  /** Checks if the value is not equal to the given input. */
  neq: InputMaybe<Scalars['String']>;
  nin: InputMaybe<Array<Scalars['String']>>;
};

export type ISanityAllDogsQueryVariables = Exact<{ [key: string]: never; }>;


export type ISanityAllDogsQuery = { __typename?: 'RootQuery', allDog: Array<{ __typename?: 'Dog', _id: string | null, name: string | null, breed: string | null, isGoodDog: boolean | null, customPortableTextRaw: unknown | null, customImageSchema: { __typename?: 'CustomImageSchema', altDescription: string | null, figcaption: string | null, imageFile: { __typename?: 'Image', asset: { __typename?: 'SanityImageAsset', url: string | null, metadata: { __typename?: 'SanityImageMetadata', lqip: string | null, dimensions: { __typename?: 'SanityImageDimensions', height: number | null, width: number | null, aspectRatio: number | null } | null } | null } | null } | null } | null }> };

export type ISanityImageFragmentFragment = { __typename?: 'CustomImageSchema', altDescription: string | null, figcaption: string | null, imageFile: { __typename?: 'Image', asset: { __typename?: 'SanityImageAsset', url: string | null, metadata: { __typename?: 'SanityImageMetadata', lqip: string | null, dimensions: { __typename?: 'SanityImageDimensions', height: number | null, width: number | null, aspectRatio: number | null } | null } | null } | null } | null };

export const ImageFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomImageSchema"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altDescription"}},{"kind":"Field","name":{"kind":"Name","value":"figcaption"}},{"kind":"Field","name":{"kind":"Name","value":"imageFile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dimensions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lqip"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ISanityImageFragmentFragment, unknown>;
export const AllDogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllDogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allDog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"breed"}},{"kind":"Field","name":{"kind":"Name","value":"isGoodDog"}},{"kind":"Field","name":{"kind":"Name","value":"customImageSchema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customPortableTextRaw"}}]}}]}},...ImageFragmentFragmentDoc.definitions]} as unknown as DocumentNode<ISanityAllDogsQuery, ISanityAllDogsQueryVariables>;