import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadMoreButtonComponent } from '../../../../../global/modules/layouts/load-more-button/components/load-more-button/load-more-button.component';
import { Observable } from 'rxjs';
import { GameAchievementInterface } from '../../../../../global/types/entities/games/game-achievement.interface';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../../state/types/root-state.interface';
import { GameAchievementsSelectors } from '../../../../../state/features/game-details/selectors/game-achievements.selectors';
import { GameAchievementsActions } from '../../../../../state/features/game-details/actions/game-achievements.actions';

@Component({
  selector: 'app-game-partition-achievements',
  templateUrl: './game-partition-achievements.component.html',
})
export class GamePartitionAchievementsComponent implements OnInit {
  @ViewChild('loadMoreButton')
  private loadMoreButtonElement!: LoadMoreButtonComponent;
  public gameAchievementsLoading$ = new Observable<boolean>();
  public gameAchievementsNextPage$ = new Observable<string | null>();
  public gameAchievements$ = new Observable<
    GameAchievementInterface[] | null
  >();

  constructor(private readonly store$: Store<RootStateInterface>) {}

  ngOnInit(): void {
    this.initValues();
  }

  private initValues(): void {
    this.gameAchievements$ = this.store$.pipe(
      select(GameAchievementsSelectors.gameAchievementsSelector)
    );
    this.gameAchievementsLoading$ = this.store$.pipe(
      select(GameAchievementsSelectors.gameAchievementsLoadingSelector)
    );
    this.gameAchievementsNextPage$ = this.store$.pipe(
      select(GameAchievementsSelectors.gameAchievementsNextPageSelector)
    );
  }

  public loadMoreAchievements(url: string): void {
    this.store$.dispatch(
      GameAchievementsActions.getGameAchievementsNextPage({ url })
    );
  }

  public loadMoreAchievementsOnScrollDown(): void {
    if (this.loadMoreButtonElement) this.loadMoreButtonElement.click();
  }
}
