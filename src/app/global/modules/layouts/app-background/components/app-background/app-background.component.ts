import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../../../state/types/root-state.interface';
import { GameDetailsSelectors } from '../../../../../../state/features/game-details/selectors/game-details.selectors';
import { Observable } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-background',
  templateUrl: './app-background.component.html',
  styleUrls: ['./app-background.component.scss'],
  animations: [
    trigger('showHide', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('200ms', style({ opacity: '*' })),
      ]),
      transition(':leave', [
        style({ opacity: '*' }),
        animate('200ms', style({ opacity: '0' })),
      ]),
    ]),
  ],
})
export class AppBackgroundComponent implements OnInit {
  public appBackgroundImageUrl$ = new Observable<null | string>();

  constructor(private readonly store$: Store<RootStateInterface>) {}

  ngOnInit(): void {
    this.appBackgroundImageUrl$ = this.store$.pipe(
      select(GameDetailsSelectors.gameDetailsBgImageSelector)
    );
  }
}
