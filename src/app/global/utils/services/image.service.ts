import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  public getCroppedImage600x400(imageUrl: string): string {
    return _.replace(imageUrl, 'media/', 'media/crop/600/400/');
  }

  public getCroppedImage420(imageUrl: string): string {
    return _.replace(imageUrl, 'media/', 'media/resize/420/-/');
  }

  public getCroppedImage200(imageUrl: string): string {
    return _.replace(imageUrl, 'media/', 'media/resize/200/-/');
  }

  public getCroppedImage80(imageUrl: string): string {
    return _.replace(imageUrl, 'media/', 'media/resize/80/-/');
  }
}
