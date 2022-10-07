import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../../../state/types/root-state.interface';
import { GameDetailsSelectors } from '../../../../../../state/features/game-details/selectors/game-details.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-background',
  templateUrl: './app-background.component.html',
  styleUrls: ['./app-background.component.scss'],
})
export class AppBackgroundComponent implements OnInit {
  public appBackgroundImageUrl$ = new Observable<null | string>();

  constructor(private store$: Store<RootStateInterface>) {}

  ngOnInit(): void {
    this.appBackgroundImageUrl$ = this.store$.pipe(
      select(GameDetailsSelectors.gameDetailsBgImageSelector)
    );
  }
}
