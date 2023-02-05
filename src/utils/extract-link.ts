import {
  ISanityOptionalLink,
  ISanityRequiredLink,
  SanityLinkTypeEnum,
} from 'src/backend/types/general/links';

export function extractLink(
  link: ISanityOptionalLink | ISanityRequiredLink
): string {
  if (link.linkType == SanityLinkTypeEnum.Internal) {
    return link.internalLink.slug.current;
  } else {
    return link.externalLink;
  }
}
