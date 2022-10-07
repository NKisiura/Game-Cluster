import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadMoreButtonComponent } from '../../../../../global/modules/layouts/load-more-button/components/load-more-button/load-more-button.component';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../../state/types/root-state.interface';
import { Observable } from 'rxjs';
import { GameInterface } from '../../../../../global/types/entities/games/game.interface';
import { GameSuggestionsSelectors } from '../../../../../state/features/game-details/selectors/game-suggestions.selectors';
import { GameSuggestionsActions } from '../../../../../state/features/game-details/actions/game-suggestions.actions';

@Component({
  selector: 'app-game-partition-suggestions',
  templateUrl: './game-partition-suggestions.component.html',
})
export class GamePartitionSuggestionsComponent implements OnInit {
  @ViewChild('loadMoreButton')
  private loadMoreButtonElement!: LoadMoreButtonComponent;
  public gameSuggestions$ = new Observable<GameInterface[] | null>();
  public gameSuggestionsLoading$ = new Observable<boolean>();
  public gameSuggestionsNextPage$ = new Observable<string | null>();

  constructor(private readonly store$: Store<RootStateInterface>) {}

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

  public loadMoreGameSuggestions(url: string): void {
    this.store$.dispatch(
      GameSuggestionsActions.getGameSuggestionsNextPage({ url })
    );
  }

  public loadMoreGameSuggestionsOnScrollDown(): void {
    if (this.loadMoreButtonElement) this.loadMoreButtonElement.click();
  }
}
