import { Component, Input, OnInit } from '@angular/core';
import { GameDetailsInterface } from '../../../../../global/types/entities/games/game-details.interface';
import { Observable } from 'rxjs';
import { GameYoutubeVideoInterface } from '../../../../../global/types/entities/games/game-youtube-video.interface';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../../state/types/root-state.interface';
import { GameVideosSelectors } from '../../../../../state/features/game-details/selectors/game-videos.selectors';
import { GameDetailsPartitions } from '../../../types/game-details-partitions.enum';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { IconService } from '../../../../../global/utils/services/icon.service';

@Component({
  selector: 'app-game-videos',
  templateUrl: './game-videos.component.html',
})
export class GameVideosComponent implements OnInit {
  @Input('game') public game!: GameDetailsInterface;
  public gameVideos$ = new Observable<GameYoutubeVideoInterface[] | null>();
  public gameVideosCount$ = new Observable<number | null>();
  public gameVideosPartitionRouterLink = GameDetailsPartitions.VIDEOS;

  constructor(
    private readonly store$: Store<RootStateInterface>,
    private readonly iconService: IconService
  ) {}

  ngOnInit(): void {
    this.initValues();
  }

  private initValues(): void {
    this.gameVideos$ = this.store$.pipe(
      select(GameVideosSelectors.gameVideosSelector)
    );
    this.gameVideosCount$ = this.store$.pipe(
      select(GameVideosSelectors.gameVideosCountSelector)
    );
  }

  public getFirstFiveGameVideos(
    gameVideoList: GameYoutubeVideoInterface[]
  ): GameYoutubeVideoInterface[] {
    return gameVideoList.slice(0, 5);
  }

  public getEllipsisIcon(): IconDefinition {
    return this.iconService.ellipsisIcon;
  }
}
