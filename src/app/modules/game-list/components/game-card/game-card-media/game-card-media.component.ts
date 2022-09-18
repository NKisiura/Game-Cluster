import { Component, Input } from '@angular/core';
import { ImageService } from '../../../../../global/utils/services/image.service';
import {
  GameClip,
  GameShortScreenshot,
} from '../../../../../global/types/entities/games/game.interface';
import { IconService } from '../../../../../global/utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-game-card-media',
  templateUrl: './game-card-media.component.html',
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

  constructor(
    private imageService: ImageService,
    private iconService: IconService
  ) {}

  public getCroppedImage(imageUrl: string): string {
    return this.imageService.getCroppedImage600x400(imageUrl);
  }

  public getPlayIcon(): IconDefinition {
    return this.iconService.playIcon;
  }
}
