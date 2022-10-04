import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDetailsComponent } from './game-details.component';
import { GameDetailsMainComponent } from './components/game-details-main/game-details-main.component';
import { BreadcrumbsComponent } from './components/common/breadcrumbs/breadcrumbs.component';
import { GameDetailsRoutingModule } from './game-details-routing.module';
import { GamePartitionScreenshotsComponent } from './components/game-details-partitions/game-details-partition-screenshots/game-partition-screenshots.component';
import { BackendErrorMessageModule } from '../../global/modules/layouts/backend-error-message/backend-error-message.module';
import { LoadingSpinnerModule } from '../../global/modules/layouts/loading-spinner/loading-spinner.module';
import { GameSectionInfoComponent } from './components/game-details-main/game-section-info/game-section-info.component';
import { GameSectionMediaComponent } from './components/game-details-main/game-section-media/game-section-media.component';
import { GameDetailsHeaderComponent } from './components/common/game-details-header/game-details-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageTitleModule } from '../../global/modules/layouts/page-title/page-title.module';
import { GameGalleryComponent } from './components/game-details-main/game-section-media/game-gallery/game-gallery.component';
import { GameStoresComponent } from './components/game-details-main/game-section-media/game-stores/game-stores.component';
import { GameDescriptionComponent } from './components/game-details-main/game-section-info/game-description/game-description.component';
import { GameInfoComponent } from './components/game-details-main/game-section-info/game-info/game-info.component';
import { GameAchievementsComponent } from './components/game-details-main/game-achievements/game-achievements.component';
import { GameAchievementComponent } from './components/common/game-achievement/game-achievement.component';

@NgModule({
  declarations: [
    GameDetailsComponent,
    GameDetailsMainComponent,
    BreadcrumbsComponent,
    GameDetailsHeaderComponent,
    GameAchievementComponent,
    GameSectionInfoComponent,
    GameSectionMediaComponent,
    GameGalleryComponent,
    GameStoresComponent,
    GameDescriptionComponent,
    GameInfoComponent,
    GameAchievementsComponent,
    GamePartitionScreenshotsComponent,
  ],
  imports: [
    CommonModule,
    GameDetailsRoutingModule,
    FontAwesomeModule,
    BackendErrorMessageModule,
    LoadingSpinnerModule,
    PageTitleModule,
  ],
})
export class GameDetailsModule {}
