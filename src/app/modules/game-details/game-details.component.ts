import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDetailsActions } from '../../state/features/game-details/actions/game-details.actions';
import { BackendErrorResponseInterface } from '../../state/types/backend-error-response.interface';
import { AppStateInterface } from '../../state/types/app-state.interface';
import { select, Store } from '@ngrx/store';
import { GameDetailsInterface } from '../../global/types/entities/games/game-details.interface';
import { GameDetailsSelectors } from '../../state/features/game-details/selectors/game-details.selectors';
import { Observable } from 'rxjs';
import { API_GAMES_URL } from '../../global/constants/api-constants';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
})
export class GameDetailsComponent implements OnInit {
  public gameDetails$ = new Observable<GameDetailsInterface | null>();
  public gameDetailsLoading$ = new Observable<boolean>();
  public gameDetailsError$ =
    new Observable<BackendErrorResponseInterface | null>();

  constructor(
    private store$: Store<AppStateInterface>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initActions();
    this.initValues();
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

  private initActions(): void {
    const url = `${API_GAMES_URL}/${this.getCurrentGameSlug()}`;
    this.store$.dispatch(GameDetailsActions.getGame({ url }));
  }

  private getCurrentGameSlug(): string {
    return this.activatedRoute.snapshot.params['game-slug'];
  }
}
