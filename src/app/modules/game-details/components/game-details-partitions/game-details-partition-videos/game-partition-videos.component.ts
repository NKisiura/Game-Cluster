import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadMoreButtonComponent } from '../../../../../global/modules/layouts/load-more-button/components/load-more-button/load-more-button.component';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '../../../../../state/types/app-state.interface';
import { GameVideosSelectors } from '../../../../../state/features/game-details/selectors/game-videos.selectors';
import { Observable } from 'rxjs';
import { GameYoutubeVideoInterface } from '../../../../../global/types/entities/games/game-youtube-video.interface';
import { GameVideosActions } from '../../../../../state/features/game-details/actions/game-videos.actions';

@Component({
  selector: 'app-game-partition-videos',
  templateUrl: './game-partition-videos.component.html',
})
export class GamePartitionVideosComponent implements OnInit {
  @ViewChild('loadMoreButton')
  private loadMoreButtonElement!: LoadMoreButtonComponent;
  public gameVideos$ = new Observable<GameYoutubeVideoInterface[] | null>();
  public gameVideosLoading$ = new Observable<boolean>();
  public gameVideosNextPage$ = new Observable<string | null>();

  constructor(private readonly store$: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.initValues();
  }

  private initValues(): void {
    this.gameVideos$ = this.store$.pipe(
      select(GameVideosSelectors.gameVideosSelector)
    );
    this.gameVideosLoading$ = this.store$.pipe(
      select(GameVideosSelectors.gameVideosLoadingSelector)
    );
    this.gameVideosNextPage$ = this.store$.pipe(
      select(GameVideosSelectors.gameVideosNextPageSelector)
    );
  }

  public loadMoreGameVideos(url: string): void {
    this.store$.dispatch(GameVideosActions.getGameVideosNextPage({ url }));
  }

  public loadMoreGameVideosOnScrollDown(): void {
    if (this.loadMoreButtonElement) this.loadMoreButtonElement.click();
  }
}
