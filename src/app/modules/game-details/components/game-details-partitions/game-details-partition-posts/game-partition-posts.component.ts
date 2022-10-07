import { Component, ViewChild } from '@angular/core';
import { LoadMoreButtonComponent } from '../../../../../global/modules/layouts/load-more-button/components/load-more-button/load-more-button.component';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../../state/types/root-state.interface';
import { GamePostsActions } from '../../../../../state/features/game-details/actions/game-posts.actions';
import { Observable } from 'rxjs';
import { GameRedditPostInterface } from '../../../../../global/types/entities/games/game-reddit-post.interface';
import { GamePostsSelectors } from '../../../../../state/features/game-details/selectors/game-posts.selectors';

@Component({
  selector: 'app-game-partition-posts',
  templateUrl: './game-partition-posts.component.html',
})
export class GamePartitionPostsComponent {
  @ViewChild('loadMoreButton')
  private loadMoreButtonElement!: LoadMoreButtonComponent;
  public gamePosts$ = new Observable<GameRedditPostInterface[] | null>();
  public gamePostsLoading$ = new Observable<boolean>();
  public gamePostsNextPage$ = new Observable<string | null>();

  constructor(private readonly store$: Store<RootStateInterface>) {}

  ngOnInit(): void {
    this.initValues();
  }

  private initValues(): void {
    this.gamePosts$ = this.store$.pipe(
      select(GamePostsSelectors.gamePostsSelector)
    );
    this.gamePostsLoading$ = this.store$.pipe(
      select(GamePostsSelectors.gamePostsLoadingSelector)
    );
    this.gamePostsNextPage$ = this.store$.pipe(
      select(GamePostsSelectors.gamePostsNextPageSelector)
    );
  }

  public loadMoreGamePosts(url: string): void {
    this.store$.dispatch(GamePostsActions.getGamePostsNextPage({ url }));
  }

  public loadMoreGamePostsOnScrollDown(): void {
    if (this.loadMoreButtonElement) this.loadMoreButtonElement.click();
  }

  public getPostsWithImages(
    gamePosts: GameRedditPostInterface[]
  ): GameRedditPostInterface[] {
    return gamePosts.filter((post) => post.image);
  }
}
