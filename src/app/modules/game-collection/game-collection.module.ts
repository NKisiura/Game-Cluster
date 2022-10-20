import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GameCollectionComponent } from './components/game-collection.component';
import { ScrollDownEmitterModule } from '../../global/modules/features/scroll-down-emitter/scroll-down-emitter.module';
import { ScrollUpButtonModule } from '../../global/modules/features/scroll-up-button/scroll-up-button.module';
import { BackendErrorMessageModule } from '../../global/modules/layouts/backend-error-message/backend-error-message.module';
import { PageTitleModule } from '../../global/modules/layouts/page-title/page-title.module';
import { EmptyResultMessageModule } from '../../global/modules/layouts/empty-result-message/empty-result-message.module';
import { CardListModule } from '../../global/modules/layouts/card-list/card-list.module';
import { GameListModule } from '../game-list/game-list.module';
import { LoadMoreButtonModule } from '../../global/modules/layouts/load-more-button/load-more-button.module';
import { LoadingSpinnerModule } from '../../global/modules/layouts/loading-spinner/loading-spinner.module';

const routes: Routes = [
  {
    path: 'game-collection/:game-collection',
    component: GameCollectionComponent,
  },
];

@NgModule({
  declarations: [GameCollectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ScrollDownEmitterModule,
    ScrollUpButtonModule,
    BackendErrorMessageModule,
    PageTitleModule,
    EmptyResultMessageModule,
    CardListModule,
    GameListModule,
    LoadMoreButtonModule,
    LoadingSpinnerModule,
  ],
})
export class GameCollectionModule {}
