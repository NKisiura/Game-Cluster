import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { RouterModule, Routes } from '@angular/router';
import { CardListModule } from '../../global/modules/layouts/card-list/card-list.module';
import { LoadingSpinnerModule } from '../../global/modules/layouts/loading-spinner/loading-spinner.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GameCardMetacriticScoreComponent } from './components/game-card/game-card-metacritic-score/game-card-metacritic-score.component';
import { GameCardPlatformListComponent } from './components/game-card/game-card-platform-list/game-card-platform-list.component';
import { GameCardDetailsComponent } from './components/game-card/game-card-details/game-card-details.component';
import { GameCardShowMoreButtonComponent } from './components/game-card/game-card-show-more-button/game-card-show-more-button.component';
import { GameCardMediaComponent } from './components/game-card/game-card-media/game-card-media.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollDownEmitterModule } from '../../global/modules/features/scroll-down-emitter/scroll-down-emitter.module';
import { LoadMoreButtonModule } from '../../global/modules/layouts/load-more-button/load-more-button.module';
import { BackendErrorMessageModule } from '../../global/modules/layouts/backend-error-message/backend-error-message.module';
import { EmptyResultMessageModule } from '../../global/modules/layouts/empty-result-message/empty-result-message.module';
import { ScrollUpButtonModule } from '../../global/modules/features/scroll-up-button/scroll-up-button.module';
import { APP_NAME } from '../../global/constants/app-constant';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full',
  },
  {
    path: 'games',
    component: GameListComponent,
    title: `${APP_NAME} • Games`,
  },
];

@NgModule({
  declarations: [
    GameListComponent,
    GameCardComponent,
    GameCardMetacriticScoreComponent,
    GameCardPlatformListComponent,
    GameCardDetailsComponent,
    GameCardShowMoreButtonComponent,
    GameCardMediaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardListModule,
    LoadingSpinnerModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    CarouselModule,
    ScrollDownEmitterModule,
    LoadMoreButtonModule,
    BackendErrorMessageModule,
    EmptyResultMessageModule,
    ScrollUpButtonModule,
  ],
  exports: [GameCardComponent],
})
export class GameListModule {}
