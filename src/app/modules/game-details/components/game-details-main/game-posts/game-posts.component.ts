import { Component, Input } from '@angular/core';
import { GameDetailsInterface } from '../../../../../global/types/entities/games/game-details.interface';
import { Observable } from 'rxjs';
import { GameDetailsPartitions } from '../../../types/game-details-partitions.enum';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '../../../../../state/types/app-state.interface';
import { IconService } from '../../../../../global/utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { GameRedditPostInterface } from '../../../../../global/types/entities/games/game-reddit-post.interface';
import { GamePostsSelectors } from '../../../../../state/features/game-details/selectors/game-posts.selectors';

@Component({
  selector: 'app-game-posts',
  templateUrl: './game-posts.component.html',
  styleUrls: ['./game-posts.component.scss'],
})
export class GamePostsComponent {
  @Input('game') public game!: GameDetailsInterface;
  public gamePosts$ = new Observable<GameRedditPostInterface[] | null>();
  public gamePostsPartitionRouterLink = GameDetailsPartitions.POSTS;

  constructor(
    private readonly store$: Store<AppStateInterface>,
    private readonly iconService: IconService
  ) {}

  ngOnInit(): void {
    this.initValues();
  }

  private initValues(): void {
    this.gamePosts$ = this.store$.pipe(
      select(GamePostsSelectors.gamePostsSelector)
    );
  }

  public getFirstFiveGamePosts(
    gamePosts: GameRedditPostInterface[]
  ): GameRedditPostInterface[] {
    const filteredGamePosts = this.getPostsWithImages(gamePosts);
    return filteredGamePosts.slice(0, 5);
  }

  private getPostsWithImages(
    gamePosts: GameRedditPostInterface[]
  ): GameRedditPostInterface[] {
    return gamePosts.filter((post) => post.image);
  }

  public getEllipsisIcon(): IconDefinition {
    return this.iconService.ellipsisIcon;
  }
}
