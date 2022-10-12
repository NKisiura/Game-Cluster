import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GameDetailsActions } from '../../state/features/game-details/actions/game-details.actions';
import { BackendErrorResponseInterface } from '../../state/types/backend-error-response.interface';
import { RootStateInterface } from '../../state/types/root-state.interface';
import { select, Store } from '@ngrx/store';
import { GameDetailsInterface } from '../../global/types/entities/games/game-details.interface';
import { GameDetailsSelectors } from '../../state/features/game-details/selectors/game-details.selectors';
import { Observable, Subject, takeUntil } from 'rxjs';
import { API_GAMES_URL } from '../../global/constants/api-constants';
import { TitleService } from '../../global/utils/services/title.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
})
export class GameDetailsComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();

  public gameDetails$ = new Observable<GameDetailsInterface | null>();
  public gameDetailsLoading$ = new Observable<boolean>();
  public gameDetailsError$ =
    new Observable<BackendErrorResponseInterface | null>();

  constructor(
    private readonly store$: Store<RootStateInterface>,
    private readonly activatedRoute: ActivatedRoute,
    private readonly titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.initValues();
    this.initListeners();
  }

  private initListeners(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: Params) => this.getCurrentGame(params));

    this.gameDetails$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((game: GameDetailsInterface | null) => {
        if (game) {
          this.titleService.setTitle([game.name]);
        } else {
          this.titleService.setBasePageTitle();
        }
      });
  }

  private initValues(): void {
    this.gameDetails$ = this.store$.pipe(
      select(GameDetailsSelectors.gameSelector)
    );
    this.gameDetailsLoading$ = this.store$.pipe(
      select(GameDetailsSelectors.gameLoadingSelector)
    );
    this.gameDetailsError$ = this.store$.pipe(
      select(GameDetailsSelectors.gameErrorSelector)
    );
  }

  private getCurrentGame(params: Params): void {
    const url = `${API_GAMES_URL}/${params['game-slug']}`;
    this.store$.dispatch(GameDetailsActions.getGame({ url }));
  }
}
