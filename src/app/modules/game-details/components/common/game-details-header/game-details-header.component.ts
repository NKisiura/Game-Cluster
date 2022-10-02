import { Component, Input } from '@angular/core';
import { IconService } from '../../../../../global/utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { GameParentPlatform } from '../../../../../global/types/entities/games/game.interface';
import { DateService } from '../../../../../global/utils/services/date.service';

@Component({
  selector: 'app-game-details-header',
  templateUrl: './game-details-header.component.html',
})
export class GameDetailsHeaderComponent {
  @Input('release-date') public releaseDate!: string;
  @Input('play-time') public playtime!: number;
  @Input('platforms') public platforms!: GameParentPlatform[];

  constructor(
    private readonly dateService: DateService,
    private readonly iconService: IconService
  ) {}

  public getFormattedReleaseDate(date: string): string {
    return this.dateService.changeDateFormat(date, 'll');
  }

  public getPlatformIcon(platformSlug: string): IconDefinition {
    return this.iconService.getPlatformIconBySlug(platformSlug);
  }
}
