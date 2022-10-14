import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../../state/types/root-state.interface';
import { Observable } from 'rxjs';
import { GameInterface } from '../../../../../global/types/entities/games/game.interface';
import { BackendErrorResponseInterface } from '../../../../../state/types/backend-error-response.interface';
import { GameSearchSelectors } from '../../../../../state/features/game-search/selectors/game-search.selectors';
import { RouterLinks } from '../../../../../global/constants/router-links';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header-search-result',
  templateUrl: './header-search-result.component.html',
  styleUrls: ['./header-search-result.component.scss'],
  animations: [
    trigger('showHide', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('200ms', style({ opacity: '1' })),
      ]),
      transition(':leave', [
        style({ opacity: '1' }),
        animate('200ms', style({ opacity: '0' })),
      ]),
    ]),
  ],
})
export class HeaderSearchResultComponent implements OnInit {
  @Input('search-query') public searchQuery!: string;
  @Input('visibility') public visibility!: boolean;
  public gamesRouterLink: string = RouterLinks.GAMES_ROUTER_LINK;

  public gameSearchLoading$ = new Observable<boolean>();
  public gameSearchResult$ = new Observable<GameInterface[] | null>();
  public gameSearchResultCount$ = new Observable<number | null>();
  public gameSearchError$ =
    new Observable<BackendErrorResponseInterface | null>();

  constructor(private readonly store$: Store<RootStateInterface>) {}

  ngOnInit(): void {
    this.initValues();
  }

  private initValues(): void {
    this.gameSearchLoading$ = this.store$.pipe(
      select(GameSearchSelectors.gameSearchLoadingSelector)
    );
    this.gameSearchResult$ = this.store$.pipe(
      select(GameSearchSelectors.gameSearchResultSelector)
    );
    this.gameSearchResultCount$ = this.store$.pipe(
      select(GameSearchSelectors.gameSearchResultCount)
    );
    this.gameSearchError$ = this.store$.pipe(
      select(GameSearchSelectors.gameSearchErrorSelector)
    );
  }
}
