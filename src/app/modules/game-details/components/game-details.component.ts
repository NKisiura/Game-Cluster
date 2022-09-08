import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '../../../state/types/app-state.interface';
import { GameDetailsActions } from '../../../state/features/game-details/actions/game-details.actions';
import { API_GAMES_URL } from '../../../global/constants/api-constants';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GameDetailsInterface } from '../../../global/types/entities/games/game-details.interface';
import { GameDetailsSelectors } from '../../../state/features/game-details/selectors/game-details.selectors';
import { BackendErrorResponseInterface } from '../../../state/types/backend-error-response.interface';

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
      select(GameDetailsSelectors.gameDetailsSelector)
    );
    this.gameDetailsLoading$ = this.store$.pipe(
      select(GameDetailsSelectors.gameDetailsLoadingSelector)
    );
    this.gameDetailsError$ = this.store$.pipe(
      select(GameDetailsSelectors.gameDetailsErrorSelector)
    );
  }

  private initActions(): void {
    const url = `${API_GAMES_URL}/${this.getCurrentGameSlug()}`;
    this.store$.dispatch(GameDetailsActions.getGameDetails({ url }));
  }

  private getCurrentGameSlug(): string {
    return this.activatedRoute.snapshot.params['slug'];
  }
}
