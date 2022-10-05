import { Component, Input } from '@angular/core';
import { GameYoutubeVideoInterface } from '../../../../../global/types/entities/games/game-youtube-video.interface';
import { YOUTUBE_VIDEO_BASE_URL } from '../../../../../global/constants/api-constants';
import { IconService } from '../../../../../global/utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { DateService } from '../../../../../global/utils/services/date.service';

@Component({
  selector: 'app-game-video',
  templateUrl: './game-video.component.html',
})
export class GameVideoComponent {
  @Input('game-video') public gameVideo!: GameYoutubeVideoInterface;
  @Input('slice-video-name') public isNeedToSliceVideoName: boolean = false;
  public slicedVideoNameLength: number = 45;
  public youtubeBaseUrl = YOUTUBE_VIDEO_BASE_URL;

  constructor(
    private readonly iconService: IconService,
    private readonly dateService: DateService
  ) {}

  public getPlayIcon(): IconDefinition {
    return this.iconService.playIcon;
  }

  public getSlicedVideoName(videoName: string): string {
    if (videoName.length > this.slicedVideoNameLength) {
      return videoName.slice(0, this.slicedVideoNameLength) + '...';
    }
    return videoName;
  }

  public getFormattedReleaseDate(date: string): string {
    return this.dateService.changeDateFormat(date, 'll');
  }
}
