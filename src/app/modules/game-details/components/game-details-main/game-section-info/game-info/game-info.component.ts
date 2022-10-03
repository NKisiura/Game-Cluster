import { Component, Input } from '@angular/core';
import { GameDetailsInterface } from '../../../../../../global/types/entities/games/game-details.interface';
import { DateService } from '../../../../../../global/utils/services/date.service';
import { NotGamesEntityTypes } from '../../../../../../global/types/entities/entity-types.enum';
import { Entity } from '../../../../../../global/types/entities/entity';
import { Params } from '@angular/router';
import { RouterLinks } from '../../../../../../global/constants/router-links';
import { GamePlatform } from '../../../../../../global/types/entities/games/game.interface';
import { PlatformInterface } from '../../../../../../global/types/entities/platforms/platform.interface';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
})
export class GameInfoComponent {
  @Input('game') public game!: GameDetailsInterface;
  public gamesRouterLink: string = RouterLinks.GAMES_ROUTER_LINK;

  constructor(private readonly dateService: DateService) {}

  public getFormattedReleaseDate(releaseDate: string): string {
    return this.dateService.changeDateFormat(releaseDate, 'll');
  }

  public getGamePlatforms(platforms: GamePlatform[]): PlatformInterface[] {
    return platforms.map((gamePlatform) => gamePlatform.platform);
  }

  public setQueryParams(
    entityType: NotGamesEntityTypes,
    entity: Entity
  ): Params {
    return { [entityType]: entity.id };
  }
}
