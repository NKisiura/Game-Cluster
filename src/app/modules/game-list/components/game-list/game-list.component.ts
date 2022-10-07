import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../state/types/root-state.interface';
import { Observable, Subject, takeUntil } from 'rxjs';
import { GameInterface } from '../../../../global/types/entities/games/game.interface';
import { GamesSelectors } from '../../../../state/features/games/selectors/games.selectors';
import { GamesActions } from '../../../../state/features/games/actions/games.actions';
import { API_GAMES_URL } from '../../../../global/constants/api-constants';
import { ActivatedRoute, Params } from '@angular/router';
import { stringify } from 'query-string';
import { BackendErrorResponseInterface } from '../../../../state/types/backend-error-response.interface';
import { LoadMoreButtonComponent } from '../../../../global/modules/layouts/load-more-button/components/load-more-button/load-more-button.component';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
})
export class GameListComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  @ViewChild('loadMoreButton')
  private loadMoreButtonElement!: LoadMoreButtonComponent;
  public gamesLoading$ = new Observable<boolean>();
  public gamesError$ = new Observable<BackendErrorResponseInterface | null>();
  public gamesList$ = new Observable<GameInterface[] | null>();
  public gamesNextPage$ = new Observable<string | null>();

  constructor(
    private store$: Store<RootStateInterface>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initActions();
    this.initValues();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public loadMoreGames(url: string): void {
    this.store$.dispatch(GamesActions.getGamesNextPage({ url }));
  }

  public loadMoreGamesOnScrollDown(): void {
    if (this.loadMoreButtonElement) this.loadMoreButtonElement.click();
  }

  private initActions(): void {
    this.activatedRoute.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: Params) => {
        const url = API_GAMES_URL + `?${stringify(params)}`;
        this.store$.dispatch(GamesActions.getGames({ url }));
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
}
