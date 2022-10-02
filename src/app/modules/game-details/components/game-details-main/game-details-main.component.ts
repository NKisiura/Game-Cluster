import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDetailsInterface } from '../../../../global/types/entities/games/game-details.interface';
import { select, Store } from '@ngrx/store';
import { GameDetailsSelectors } from '../../../../state/features/game-details/selectors/game-details.selectors';
import { AppStateInterface } from '../../../../state/types/app-state.interface';

@Component({
  selector: 'app-game-details-main',
  templateUrl: './game-details-main.component.html',
})
export class GameDetailsMainComponent implements OnInit {
  public gameDetails$ = new Observable<GameDetailsInterface | null>();

  constructor(private readonly store$: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.initValues();
  }

  private initValues(): void {
    this.gameDetails$ = this.store$.pipe(
      select(GameDetailsSelectors.gameSelector)
    );
  }
}
