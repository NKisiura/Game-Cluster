import { Component, Input } from '@angular/core';
import { ImageService } from '../../../../../global/utils/services/image.service';
import {
  GameClip,
  GameShortScreenshot,
} from '../../../../../global/types/entities/games/game.interface';
import { IconService } from '../../../../../global/utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { animate, style, transition, trigger } from '@angular/animations';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { YOUTUBE_VIDEO_BASE_URL } from '../../../../../global/constants/api-constants';

@Component({
  selector: 'app-game-card-media',
  templateUrl: './game-card-media.component.html',
  styleUrls: ['./game-card-media.component.scss'],
  animations: [
    trigger('showHide', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class GameCardMediaComponent {
  @Input('is-card-hovered') public isCardHovered!: boolean;
  @Input('game-name') public gameName!: string;
  @Input('background-image') public backgroundImage!: string;
  @Input('game-clip') public gameClip!: GameClip | null;
  @Input('screenshots') public screenshots!: GameShortScreenshot[];

  public youtubeVideoBaseUrl = YOUTUBE_VIDEO_BASE_URL;
  public carouselOptions: OwlOptions = {
    items: 1,
    loop: true,
    dots: true,
    dotsEach: true,
    nav: true,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
  };

  constructor(
    private readonly imageService: ImageService,
    private readonly iconService: IconService
  ) {}

  public getCroppedImage(imageUrl: string): string {
    return this.imageService.getCroppedImage600x400(imageUrl);
  }

  public getPlayIcon(): IconDefinition {
    return this.iconService.playIcon;
  }

  public getYoutubeIcon(): IconDefinition {
    return this.iconService.youtubeIcon;
  }

  public getUndefinedImageIcon(): IconDefinition {
    return this.iconService.undefinedImageIcon;
  }
}
