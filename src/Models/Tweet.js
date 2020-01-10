import { ContentItem } from '@kentico/kontent-delivery';
import { resolveContentLink } from '../Utilities/ContentLinks';


export class Tweet extends ContentItem {
  constructor() {
    super({
      propertyResolver: ((fieldName) => {

        if (fieldName === 'tweet_link') {
          return 'tweetLink';
        }

        if (fieldName === 'display_options') {
          return 'displayOptions';
        }
      }),
      linkResolver: (link) => resolveContentLink(link)
    })
  }
}
