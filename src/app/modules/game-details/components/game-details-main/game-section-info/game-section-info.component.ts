import { Component, Input } from '@angular/core';
import { GameDetailsInterface } from '../../../../../global/types/entities/games/game-details.interface';
import { Observable } from 'rxjs';
import { GameInterface } from '../../../../../global/types/entities/games/game.interface';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '../../../../../state/types/app-state.interface';
import { GameSeriesSelectors } from '../../../../../state/features/game-details/selectors/game-series.selectors';
import { GameAdditionsSelector } from '../../../../../state/features/game-details/selectors/game-additions.selector';

@Component({
  selector: 'app-game-section-info',
  templateUrl: './game-section-info.component.html',
})
export class GameSectionInfoComponent {
  @Input('game') public game!: GameDetailsInterface;
  public gameSeries$ = new Observable<GameInterface[] | null>();
  public gameAdditions$ = new Observable<GameInterface[] | null>();

  constructor(private readonly store$: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.initValues();
  }

  private initValues(): void {
    this.gameSeries$ = this.store$.pipe(
      select(GameSeriesSelectors.gameSeriesSelector)
    );
    this.gameAdditions$ = this.store$.pipe(
      select(GameAdditionsSelector.gameAdditionsSelector)
    );
  }
}
