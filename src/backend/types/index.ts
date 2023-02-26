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
  _Any: unknown;
};

export type IContinent = {
  __typename?: 'Continent';
  code: Scalars['ID'];
  countries: Array<ICountry>;
  name: Scalars['String'];
};

export type IContinentFilterInput = {
  code?: InputMaybe<IStringQueryOperatorInput>;
};

export type ICountry = {
  __typename?: 'Country';
  capital?: Maybe<Scalars['String']>;
  code: Scalars['ID'];
  continent: IContinent;
  currency?: Maybe<Scalars['String']>;
  emoji: Scalars['String'];
  emojiU: Scalars['String'];
  languages: Array<ILanguage>;
  name: Scalars['String'];
  native: Scalars['String'];
  phone: Scalars['String'];
  states: Array<IState>;
};

export type ICountryFilterInput = {
  code?: InputMaybe<IStringQueryOperatorInput>;
  continent?: InputMaybe<IStringQueryOperatorInput>;
  currency?: InputMaybe<IStringQueryOperatorInput>;
};

export type ILanguage = {
  __typename?: 'Language';
  code: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  native?: Maybe<Scalars['String']>;
  rtl: Scalars['Boolean'];
};

export type ILanguageFilterInput = {
  code?: InputMaybe<IStringQueryOperatorInput>;
};

export type IQuery = {
  __typename?: 'Query';
  _entities: Array<Maybe<I_Entity>>;
  _service: I_Service;
  continent?: Maybe<IContinent>;
  continents: Array<IContinent>;
  countries: Array<ICountry>;
  country?: Maybe<ICountry>;
  language?: Maybe<ILanguage>;
  languages: Array<ILanguage>;
};


export type IQuery_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};


export type IQueryContinentArgs = {
  code: Scalars['ID'];
};


export type IQueryContinentsArgs = {
  filter?: InputMaybe<IContinentFilterInput>;
};


export type IQueryCountriesArgs = {
  filter?: InputMaybe<ICountryFilterInput>;
};


export type IQueryCountryArgs = {
  code: Scalars['ID'];
};


export type IQueryLanguageArgs = {
  code: Scalars['ID'];
};


export type IQueryLanguagesArgs = {
  filter?: InputMaybe<ILanguageFilterInput>;
};

export type IState = {
  __typename?: 'State';
  code?: Maybe<Scalars['String']>;
  country: ICountry;
  name: Scalars['String'];
};

export type IStringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type I_Entity = IContinent | ICountry | ILanguage;

export type I_Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};

export type ICountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ICountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', code: string, name: string, emoji: string }> };


export const CountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}}]}}]}}]} as unknown as DocumentNode<ICountriesQuery, ICountriesQueryVariables>;