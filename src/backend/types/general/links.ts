import { ISanitySlug } from './slug';

export enum SanityLinkTypeEnum {
  Internal = 'internalLink',
  External = 'externalLink',
}

interface ISanityCommonLinkFields {
  text: string;
}

interface ISanityInternalLink extends ISanityCommonLinkFields {
  linkType: SanityLinkTypeEnum.Internal;
  internalLink: ISanitySlug;
}

interface ISanityExternalLink extends ISanityCommonLinkFields {
  linkType: SanityLinkTypeEnum.External;
  externalLink: string;
}

export type ISanityOptionalLink = (
  | ISanityExternalLink
  | ISanityInternalLink
) & {
  hasLink: boolean;
};

export type ISanityRequiredLink = ISanityExternalLink | ISanityInternalLink;
