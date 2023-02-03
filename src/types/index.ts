import {
  ISanityOptionalLink,
  ISanityRequiredLink,
} from 'src/backend/types/index';
/**
 * This is an example of an enum that does not belong to a specfic component/section
 * but can be used by multiple components/sections
 */

export enum SectionThemeEnumGlobal {
  Light = 'Light',
  Dark = 'Dark',
}

/**
 * Since the generated interface for 'linkType' is a string.
 * We have to create a custom interface where we hardcode the type.
 *
 * This has to match the string options in the sanity backend. It is the
 * responsibility of the project's backend devloper to update these types.
 */
export interface CustomOptionalLink extends ISanityOptionalLink {
  linkType: 'internalLink' | 'externalLink';
}

export interface CustomRequiedLink extends ISanityRequiredLink {
  linkType: 'internalLink' | 'externalLink';
}
