import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  public getCroppedImage600x400(imageUrl: string): string {
    return _.replace(imageUrl, 'media/', 'media/crop/600/400/');
  }
}
