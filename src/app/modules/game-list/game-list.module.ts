import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full',
  },
  {
    path: 'games',
    component: GameListComponent,
  },
];

@NgModule({
  declarations: [GameListComponent, GameCardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class GameListModule {}
