import { Component, Input } from '@angular/core';
import { GameInterface } from '../../../../../global/types/entities/games/game.interface';
import { RouterLinks } from '../../../../../global/constants/router-links';
import { ImageService } from '../../../../../global/utils/services/image.service';
import { IconService } from '../../../../../global/utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header-search-game',
  templateUrl: './header-search-game.component.html',
})
export class HeaderSearchGameComponent {
  @Input('game') public game!: GameInterface;

  public gameRouterLink = RouterLinks.GAME_ROUTER_LINK;

  constructor(
    private readonly imageService: ImageService,
    private readonly iconService: IconService
  ) {}

  public getCroppedImage(imageUrl: string): string {
    return this.imageService.getCroppedImage200(imageUrl);
  }

  public getUndefinedImageIcon(): IconDefinition {
    return this.iconService.undefinedImageIcon;
  }

  public getPlatformIcon(platformSlug: string): IconDefinition {
    return this.iconService.getPlatformIconBySlug(platformSlug);
  }
}
