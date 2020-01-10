import {  ContentItem } from '@kentico/kontent-delivery';
import {  resolveContentLink } from '../Utilities/ContentLinks';

export class HostedVideo extends ContentItem {
    
  constructor(){
    super({
      propertyResolver: (fieldName => {
                
        if (fieldName === 'video_id'){
          return 'videoId';
        }

        if (fieldName === 'video_host'){
          return 'videoHost';
        }
      }),
      linkResolver: (link) => resolveContentLink(link)
    })    
  }
    
}
