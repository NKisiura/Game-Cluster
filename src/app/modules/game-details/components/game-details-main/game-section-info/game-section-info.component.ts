import { Component, Input } from '@angular/core';
import { GameDetailsInterface } from '../../../../../global/types/entities/games/game-details.interface';
import { Observable } from 'rxjs';
import { GameInterface } from '../../../../../global/types/entities/games/game.interface';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../../state/types/root-state.interface';
import { GameSeriesSelectors } from '../../../../../state/features/game-details/selectors/game-series.selectors';
import { GameAdditionsSelectors } from '../../../../../state/features/game-details/selectors/game-additions.selectors';
import { AdditionParentGamesSelectors } from '../../../../../state/features/game-details/selectors/addition-parent-games.selectors';

@Component({
  selector: 'app-game-section-info',
  templateUrl: './game-section-info.component.html',
})
export class GameSectionInfoComponent {
  @Input('game') public game!: GameDetailsInterface;
  public gameSeries$ = new Observable<GameInterface[] | null>();
  public gameAdditions$ = new Observable<GameInterface[] | null>();
  public additionParentGames$ = new Observable<GameInterface[] | null>();

  constructor(private readonly store$: Store<RootStateInterface>) {}

  ngOnInit(): void {
    this.initValues();
  }

  private initValues(): void {
    this.gameSeries$ = this.store$.pipe(
      select(GameSeriesSelectors.gameSeriesSelector)
    );
    this.gameAdditions$ = this.store$.pipe(
      select(GameAdditionsSelectors.gameAdditionsSelector)
    );
    this.additionParentGames$ = this.store$.pipe(
      select(AdditionParentGamesSelectors.additionParentGamesSelector)
    );
  }
}
