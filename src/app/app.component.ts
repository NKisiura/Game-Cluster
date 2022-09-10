import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from './state/types/app-state.interface';
import { GameDetailsSelectors } from './state/features/game-details/selectors/game-details.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public imageUrl$ = new Observable<null | string>();

  constructor(private store$: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.imageUrl$ = this.store$.pipe(
      select(GameDetailsSelectors.gameDetailsBgImageSelector)
    );
  }
}
