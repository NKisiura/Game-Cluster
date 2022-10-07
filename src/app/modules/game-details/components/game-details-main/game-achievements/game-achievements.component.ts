import { Component, Input, OnInit } from '@angular/core';
import { GameDetailsInterface } from '../../../../../global/types/entities/games/game-details.interface';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../../state/types/root-state.interface';
import { Observable } from 'rxjs';
import { GameAchievementInterface } from '../../../../../global/types/entities/games/game-achievement.interface';
import { GameAchievementsSelectors } from '../../../../../state/features/game-details/selectors/game-achievements.selectors';
import { GameDetailsPartitions } from '../../../types/game-details-partitions.enum';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { IconService } from '../../../../../global/utils/services/icon.service';

@Component({
  selector: 'app-game-achievements',
  templateUrl: './game-achievements.component.html',
  styleUrls: ['./game-achievements.component.scss'],
})
export class GameAchievementsComponent implements OnInit {
  @Input('game') public game!: GameDetailsInterface;
  public gameAchievementsCount$ = new Observable<number | null>();
  public gameAchievements$ = new Observable<
    GameAchievementInterface[] | null
  >();
  public gameAchievementsPartitionRouterLink =
    GameDetailsPartitions.ACHIEVEMENTS;

  constructor(
    private readonly store$: Store<RootStateInterface>,
    private readonly iconService: IconService
  ) {}

  ngOnInit(): void {
    this.initValues();
  }

  private initValues(): void {
    this.gameAchievementsCount$ = this.store$.pipe(
      select(GameAchievementsSelectors.gameAchievementsCountSelector)
    );
    this.gameAchievements$ = this.store$.pipe(
      select(GameAchievementsSelectors.gameAchievementsSelector)
    );
  }

  public getFirstFiveGameAchievements(
    gameAchievements: GameAchievementInterface[]
  ): GameAchievementInterface[] {
    return gameAchievements.slice(0, 5);
  }

  public getEllipsisIcon(): IconDefinition {
    return this.iconService.ellipsisIcon;
  }
}
