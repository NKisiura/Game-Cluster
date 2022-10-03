import { Component, Input, OnInit } from '@angular/core';
import { GameDetailsInterface } from '../../../../../global/types/entities/games/game-details.interface';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '../../../../../state/types/app-state.interface';
import { Observable } from 'rxjs';
import { GameScreenshotInterface } from '../../../../../global/types/entities/games/game-screenshot.interface';
import { GameScreenshotsSelectors } from '../../../../../state/features/game-details/selectors/game-screenshots.selectors';

@Component({
  selector: 'app-game-section-media',
  templateUrl: './game-section-media.component.html',
})
export class GameSectionMediaComponent implements OnInit {
  @Input('game') public game!: GameDetailsInterface;
  public gameScreenshots$ = new Observable<GameScreenshotInterface[] | null>();

  constructor(private readonly store$: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.initValues();
  }

  private initValues(): void {
    this.gameScreenshots$ = this.store$.pipe(
      select(GameScreenshotsSelectors.gameScreenshotsSelector)
    );
  }
}
