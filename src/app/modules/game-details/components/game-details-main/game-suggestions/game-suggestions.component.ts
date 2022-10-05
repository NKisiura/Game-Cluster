import { Component, Input, OnInit } from '@angular/core';
import { GameDetailsInterface } from '../../../../../global/types/entities/games/game-details.interface';
import { Observable } from 'rxjs';
import { GameInterface } from '../../../../../global/types/entities/games/game.interface';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '../../../../../state/types/app-state.interface';
import { GameSuggestionsSelectors } from '../../../../../state/features/game-details/selectors/game-suggestions.selectors';
import { GameDetailsPartitions } from '../../../types/game-details-partitions.enum';

@Component({
  selector: 'app-game-suggestions',
  templateUrl: './game-suggestions.component.html',
})
export class GameSuggestionsComponent implements OnInit {
  @Input('game') public game!: GameDetailsInterface;
  public gameSuggestions$ = new Observable<GameInterface[] | null>();
  public gameSuggestionsLoading$ = new Observable<boolean>();
  public gameSuggestionsNextPage$ = new Observable<string | null>();
  public gameSuggestionsPartitionRouterLink = GameDetailsPartitions.SUGGESTIONS;

  constructor(private readonly store$: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.initValues();
  }

  private initValues(): void {
    this.gameSuggestions$ = this.store$.pipe(
      select(GameSuggestionsSelectors.gameSuggestionsSelector)
    );
    this.gameSuggestionsLoading$ = this.store$.pipe(
      select(GameSuggestionsSelectors.gameSuggestionsLoadingSelector)
    );
    this.gameSuggestionsNextPage$ = this.store$.pipe(
      select(GameSuggestionsSelectors.gameSuggestionsNextPageSelector)
    );
  }

  public getFirstEightGameSuggestions(
    gameList: GameInterface[]
  ): GameInterface[] {
    return gameList.slice(0, 8);
  }
}
