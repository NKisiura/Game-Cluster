import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../../state/types/root-state.interface';
import { Observable } from 'rxjs';
import { GameScreenshotInterface } from '../../../../../global/types/entities/games/game-screenshot.interface';
import { GameScreenshotsSelectors } from '../../../../../state/features/game-details/selectors/game-screenshots.selectors';
import { LoadMoreButtonComponent } from '../../../../../global/modules/layouts/load-more-button/components/load-more-button/load-more-button.component';
import { ImageService } from '../../../../../global/utils/services/image.service';
import { GameScreenshotsActions } from '../../../../../state/features/game-details/actions/game-screenshots.actions';

@Component({
  selector: 'app-game-partition-screenshots',
  templateUrl: './game-partition-screenshots.component.html',
})
export class GamePartitionScreenshotsComponent implements OnInit {
  @ViewChild('loadMoreButton')
  private loadMoreButtonElement!: LoadMoreButtonComponent;
  public gameScreenshots$ = new Observable<GameScreenshotInterface[] | null>();
  public gameScreenshotsLoading$ = new Observable<boolean>();
  public gameScreenshotsNextPage$ = new Observable<string | null>();

  constructor(
    private readonly store$: Store<RootStateInterface>,
    private readonly imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.initValues();
  }

  private initValues(): void {
    this.gameScreenshots$ = this.store$.pipe(
      select(GameScreenshotsSelectors.gameScreenshotsSelector)
    );
    this.gameScreenshotsLoading$ = this.store$.pipe(
      select(GameScreenshotsSelectors.gameScreenshotsLoadingSelector)
    );
    this.gameScreenshotsNextPage$ = this.store$.pipe(
      select(GameScreenshotsSelectors.gameScreenshotsNextPageSelector)
    );
  }

  public getCroppedImage(imageUrl: string): string {
    return this.imageService.getCroppedImage420(imageUrl);
  }

  public loadMoreScreenshots(url: string): void {
    this.store$.dispatch(
      GameScreenshotsActions.getGameScreenshotsNextPage({ url })
    );
  }

  public loadMoreScreenshotsOnScrollDown(): void {
    if (this.loadMoreButtonElement) this.loadMoreButtonElement.click();
  }
}
