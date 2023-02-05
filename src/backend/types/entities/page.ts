import { ISanityCustomPortableText } from 'src/backend/types/general/portable-text';
import { ISanitySlug } from 'src/backend/types/general/slug';
import {
  ISanityRequiredLink,
  ISanityOptionalLink,
} from 'src/backend/types/general/links';

export interface ISanityPage {
  pagetitle: string;
  slug: ISanitySlug;
  content: ISanityCustomPortableText;
  requiredLink: ISanityRequiredLink;
  optionalLink: ISanityOptionalLink;
  anotherRequiredLink: ISanityRequiredLink;
}
