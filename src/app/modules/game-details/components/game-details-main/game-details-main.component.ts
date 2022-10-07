import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDetailsInterface } from '../../../../global/types/entities/games/game-details.interface';
import { select, Store } from '@ngrx/store';
import { GameDetailsSelectors } from '../../../../state/features/game-details/selectors/game-details.selectors';
import { RootStateInterface } from '../../../../state/types/root-state.interface';
import { GameInterface } from '../../../../global/types/entities/games/game.interface';
import { GameAchievementInterface } from '../../../../global/types/entities/games/game-achievement.interface';
import { GameYoutubeVideoInterface } from '../../../../global/types/entities/games/game-youtube-video.interface';
import { GameRedditPostInterface } from '../../../../global/types/entities/games/game-reddit-post.interface';
import { GameSuggestionsSelectors } from '../../../../state/features/game-details/selectors/game-suggestions.selectors';
import { GameAchievementsSelectors } from '../../../../state/features/game-details/selectors/game-achievements.selectors';
import { GameVideosSelectors } from '../../../../state/features/game-details/selectors/game-videos.selectors';
import { GamePostsSelectors } from '../../../../state/features/game-details/selectors/game-posts.selectors';

@Component({
  selector: 'app-game-details-main',
  templateUrl: './game-details-main.component.html',
})
export class GameDetailsMainComponent implements OnInit {
  public gameDetails$ = new Observable<GameDetailsInterface | null>();
  public gameSuggestions$ = new Observable<GameInterface[] | null>();
  public gameAchievements$ = new Observable<
    GameAchievementInterface[] | null
  >();
  public gameVideos$ = new Observable<GameYoutubeVideoInterface[] | null>();
  public gamePosts$ = new Observable<GameRedditPostInterface[] | null>();

  constructor(private readonly store$: Store<RootStateInterface>) {}

  ngOnInit(): void {
    this.initValues();
  }

  private initValues(): void {
    this.gameDetails$ = this.store$.pipe(
      select(GameDetailsSelectors.gameSelector)
    );
    this.gameSuggestions$ = this.store$.pipe(
      select(GameSuggestionsSelectors.gameSuggestionsSelector)
    );
    this.gameAchievements$ = this.store$.pipe(
      select(GameAchievementsSelectors.gameAchievementsSelector)
    );
    this.gameVideos$ = this.store$.pipe(
      select(GameVideosSelectors.gameVideosSelector)
    );
    this.gamePosts$ = this.store$.pipe(
      select(GamePostsSelectors.gamePostsSelector)
    );
  }
}
