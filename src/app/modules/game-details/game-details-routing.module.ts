import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailsMainComponent } from './components/game-details-main/game-details-main.component';
import { GameDetailsComponent } from './game-details.component';
import { GameDetailsPartitions } from './types/game-details-partitions.enum';
import { GamePartitionScreenshotsComponent } from './components/game-details-partitions/game-details-partition-screenshots/game-partition-screenshots.component';
import { GamePartitionAchievementsComponent } from './components/game-details-partitions/game-details-partition-achievements/game-partition-achievements.component';

const gameDetailsChildRoutes: Routes = [
  {
    path: '',
    component: GameDetailsMainComponent,
  },
  {
    path: GameDetailsPartitions.SCREENSHOTS,
    data: {
      breadcrumbs: GameDetailsPartitions.SCREENSHOTS,
    },
    component: GamePartitionScreenshotsComponent,
  },
  {
    path: GameDetailsPartitions.ACHIEVEMENTS,
    data: {
      breadcrumbs: GameDetailsPartitions.ACHIEVEMENTS,
    },
    component: GamePartitionAchievementsComponent,
  },
];

const routes: Routes = [
  {
    path: 'game/:game-slug',
    component: GameDetailsComponent,
    children: gameDetailsChildRoutes,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameDetailsRoutingModule {}
