import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailsMainComponent } from './components/game-details-main/game-details-main.component';
import { GameDetailsComponent } from './game-details.component';
import { GameDetailsPartitions } from './types/game-details-partitions.enum';
import { GamePartitionScreenshotsComponent } from './components/game-details-partitions/game-details-partition-screenshots/game-partition-screenshots.component';
import { GamePartitionAchievementsComponent } from './components/game-details-partitions/game-details-partition-achievements/game-partition-achievements.component';
import { GamePartitionSuggestionsComponent } from './components/game-details-partitions/game-details-partition-suggestions/game-partition-suggestions.component';
import { GamePartitionVideosComponent } from './components/game-details-partitions/game-details-partition-videos/game-partition-videos.component';
import { GamePartitionPostsComponent } from './components/game-details-partitions/game-details-partition-posts/game-partition-posts.component';

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
  {
    path: GameDetailsPartitions.SUGGESTIONS,
    data: {
      breadcrumbs: GameDetailsPartitions.SUGGESTIONS,
    },
    component: GamePartitionSuggestionsComponent,
  },
  {
    path: GameDetailsPartitions.VIDEOS,
    data: {
      breadcrumbs: GameDetailsPartitions.VIDEOS,
    },
    component: GamePartitionVideosComponent,
  },
  {
    path: GameDetailsPartitions.POSTS,
    data: {
      breadcrumbs: GameDetailsPartitions.POSTS,
    },
    component: GamePartitionPostsComponent,
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
