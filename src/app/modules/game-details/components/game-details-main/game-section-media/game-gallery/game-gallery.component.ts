import { Component, Input } from '@angular/core';
import { YOUTUBE_VIDEO_BASE_URL } from '../../../../../../global/constants/api-constants';
import { IconService } from '../../../../../../global/utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { GameClip } from '../../../../../../global/types/entities/games/game.interface';
import { GameScreenshotInterface } from '../../../../../../global/types/entities/games/game-screenshot.interface';
import { ImageService } from '../../../../../../global/utils/services/image.service';
import { GameDetailsPartitions } from '../../../../types/game-details-partitions.enum';

@Component({
  selector: 'app-game-gallery',
  templateUrl: './game-gallery.component.html',
})
export class GameGalleryComponent {
  @Input('game-clip') public gameClip!: GameClip | null;
  @Input('game-screenshots') public gameScreenshots!:
    | GameScreenshotInterface[]
    | null;

  public youtubeVideoBaseUrl = YOUTUBE_VIDEO_BASE_URL;
  public gameScreenshotsPartitionRouterLink = GameDetailsPartitions.SCREENSHOTS;

  constructor(
    private readonly iconService: IconService,
    private readonly imageService: ImageService
  ) {}

  public getYoutubeIcon(): IconDefinition {
    return this.iconService.youtubeIcon;
  }

  public getEllipsisIcon(): IconDefinition {
    return this.iconService.ellipsisIcon;
  }

  public getCroppedImage(imageUrl: string): string {
    return this.imageService.getCroppedImage600x400(imageUrl);
  }

  public getFirstFourGameScreenshots(
    gameScreenshots: GameScreenshotInterface[]
  ): GameScreenshotInterface[] {
    return gameScreenshots.slice(0, 4);
  }
}
