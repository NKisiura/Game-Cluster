import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'game/:slug',
    component: GameDetailsComponent,
  },
];

@NgModule({
  declarations: [GameDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class GameDetailsModule {}
