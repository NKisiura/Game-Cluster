import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../state/types/root-state.interface';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { GamesActions } from '../../../state/features/games/actions/games.actions';
import {
  GameCollection,
  GameCollectionLabel,
} from '../types/game-collection.enum';
import {
  API_GAME_COLLECTION_ALL_TIME_TOP_URL,
  API_GAME_COLLECTION_BEST_OF_THE_YEAR_URL,
  API_GAME_COLLECTION_LAST_30_DAYS_URL,
  API_GAME_COLLECTION_NEXT_WEEK_URL,
  API_GAME_COLLECTIONS_URL,
  API_GAMES_URL,
} from '../../../global/constants/api-constants';
import { BackendErrorResponseInterface } from '../../../state/types/backend-error-response.interface';
import { GameInterface } from '../../../global/types/entities/games/game.interface';
import { GamesSelectors } from '../../../state/features/games/selectors/games.selectors';
import { LoadMoreButtonComponent } from '../../../global/modules/layouts/load-more-button/components/load-more-button/load-more-button.component';
import { stringify } from 'query-string';
import { TitleService } from '../../../global/utils/services/title.service';

@Component({
  selector: 'app-game-collection',
  templateUrl: './game-collection.component.html',
})
export class GameCollectionComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();

  public gameCollectionTitle = '';
  @ViewChild('loadMoreButton')
  private loadMoreButtonElement!: LoadMoreButtonComponent;
  public gamesLoading$ = new Observable<boolean>();
  public gamesError$ = new Observable<BackendErrorResponseInterface | null>();
  public gamesList$ = new Observable<GameInterface[] | null>();
  public gamesNextPage$ = new Observable<string | null>();

  constructor(
    private readonly store$: Store<RootStateInterface>,
    private readonly activatedRoute: ActivatedRoute,
    private readonly titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.initListeners();
    this.initValues();
  }

  private initListeners(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        const currentGameCollection = this.getCurrentGameCollection();
        this.gameCollectionTitle = this.defineGameCollectionTitle(
          currentGameCollection
        );
        this.setPageTitle(this.gameCollectionTitle);
        this.getGamesByCurrentGameCollection(currentGameCollection);
      });

    this.activatedRoute.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: Params) => {
        const currentGameCollection = this.getCurrentGameCollection();
        this.getGamesByCurrentGameCollection(currentGameCollection, params);
      });
  }

  private initValues(): void {
    this.gamesLoading$ = this.store$.pipe(
      select(GamesSelectors.gamesLoadingSelector)
    );
    this.gamesError$ = this.store$.pipe(
      select(GamesSelectors.gamesErrorSelector)
    );
    this.gamesList$ = this.store$.pipe(
      select(GamesSelectors.gamesListSelector)
    );
    this.gamesNextPage$ = this.store$.pipe(
      select(GamesSelectors.gamesNextPageSelector)
    );
  }

  public loadMoreGames(url: string): void {
    this.store$.dispatch(GamesActions.getGamesNextPage({ url }));
  }

  public loadMoreGamesOnScrollDown(): void {
    if (this.loadMoreButtonElement) this.loadMoreButtonElement.click();
  }

  private getGamesByCurrentGameCollection(
    gameCollection: GameCollection,
    params?: Params
  ): void {
    const url = this.defineGetGamesUrlByGameCollection(gameCollection, params);
    this.store$.dispatch(GamesActions.getGames({ url }));
  }

  private getCurrentGameCollection(): GameCollection {
    return this.activatedRoute.snapshot.params['game-collection'];
  }

  private defineGetGamesUrlByGameCollection(
    gameCollection: GameCollection,
    params?: Params
  ): string {
    const baseCollectionUrl = `${API_GAMES_URL}/${API_GAME_COLLECTIONS_URL}`;
    switch (gameCollection) {
      case GameCollection.LAST_30_DAYS: {
        return `${baseCollectionUrl}/${API_GAME_COLLECTION_LAST_30_DAYS_URL}?${stringify(
          { page_size: 20, ...params }
        )}`;
      }
      case GameCollection.NEXT_WEEK: {
        return `${baseCollectionUrl}/${API_GAME_COLLECTION_NEXT_WEEK_URL}?${stringify(
          { page_size: 20, ...params }
        )}`;
      }
      case GameCollection.BEST_OF_THE_YEAR: {
        return `${baseCollectionUrl}/${API_GAME_COLLECTION_BEST_OF_THE_YEAR_URL}?${stringify(
          { page_size: 20, ...params }
        )}`;
      }
      case GameCollection.ALL_TIME_TOP: {
        return `${baseCollectionUrl}/${API_GAME_COLLECTION_ALL_TIME_TOP_URL}?${stringify(
          { page_size: 20, ...params }
        )}`;
      }
    }
  }

  private defineGameCollectionTitle(gameCollection: GameCollection): string {
    switch (gameCollection) {
      case GameCollection.LAST_30_DAYS: {
        return GameCollectionLabel.LAST_30_DAYS;
      }
      case GameCollection.NEXT_WEEK: {
        return GameCollectionLabel.NEXT_WEEK;
      }
      case GameCollection.BEST_OF_THE_YEAR: {
        return GameCollectionLabel.BEST_OF_THE_YEAR;
      }
      case GameCollection.ALL_TIME_TOP: {
        return GameCollectionLabel.ALL_TIME_TOP;
      }
    }
  }

  private setPageTitle(gameCollectionTitle: string): void {
    this.titleService.setTitle([gameCollectionTitle]);
  }
}
