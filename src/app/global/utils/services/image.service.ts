import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  public getCroppedImage600x400(imageUrl: string): string {
    const splitedUrl = imageUrl.split('/');
    splitedUrl.splice(4, 0, 'crop', '600', '400');
    return splitedUrl.join('/');
  }
}
