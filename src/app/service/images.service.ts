import { Injectable } from '@angular/core';

import { ArtworkConfig } from '../models/ArtworkConfig';
import { Artwork } from '../models/Artwork';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor() { }

  getImage(config: ArtworkConfig | null, artwork: Artwork | null): string {
    if(!this.checkData(config?.iiif_url, artwork?.image_id, artwork?.thumbnail?.width)) {
      return '';
    }
    const urlSuffix = `/full/${this.getWidth(artwork?.thumbnail?.width)},/0/default.jpg`
    return `${config?.iiif_url}/${artwork?.image_id}${urlSuffix}`
  }

  getWidth(width: number | undefined): number | null {
    if(width === undefined){
      return null
    }

    if(width > 843) {
      return 843;
    }
    return width;
  }

  checkData(iiif: string | undefined, id: number | undefined, thumbnail: any) {
    if(!iiif || !id || !thumbnail) {
      return false;
    }
    return true;
  }
}
