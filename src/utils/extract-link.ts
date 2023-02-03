import { CustomOptionalLink, CustomRequiedLink } from 'src/types/index';

export function extractLink(
  link: CustomOptionalLink | CustomRequiedLink
): string {
  if (link.linkType === 'internalLink') {
    return link.internalLink?.slug?.current!;
  } else {
    return link.externalLink!;
  }
}
