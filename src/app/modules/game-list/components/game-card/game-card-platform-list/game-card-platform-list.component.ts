import { Component, Input } from '@angular/core';
import { GameParentPlatform } from '../../../../../global/types/entities/games/game.interface';
import { IconService } from '../../../../../global/utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-game-card-platform-list',
  templateUrl: './game-card-platform-list.component.html',
})
export class GameCardPlatformListComponent {
  @Input('parent-platform-list')
  public gameParentPlatformList!: GameParentPlatform[];

  constructor(private iconService: IconService) {}

  public getAcceptablePlatformsToView(platforms: GameParentPlatform[]) {
    return this.getGameParentPlatformListWithIcon(platforms);
  }

  public getGameParentPlatformListWithIcon(
    platforms: GameParentPlatform[]
  ): GameParentPlatform[] {
    return platforms.filter((platform) => {
      return (
        this.getPlatformIcon(platform.platform.slug) !== this.getUndefinedIcon()
      );
    });
  }

  public getCountOfPlatformsWithoutIcon(
    platforms: GameParentPlatform[]
  ): number {
    const countOfPlatformsWithoutIcon =
      platforms.length -
      this.getGameParentPlatformListWithIcon(platforms).length;

    return countOfPlatformsWithoutIcon < 0 ? 0 : countOfPlatformsWithoutIcon;
  }

  public getUndefinedIcon(): IconDefinition {
    return this.iconService.getUndefinedIcon();
  }

  public getPlatformIcon(platformSlug: string): IconDefinition {
    return this.iconService.getPlatformIconBySlug(platformSlug);
  }
}
