import { Component, OnInit } from '@angular/core';
import { IconService } from '../../../../global/utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import * as _ from 'lodash';
import { filter, fromEvent, Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../state/types/root-state.interface';
import { GameSearchActions } from '../../../../state/features/game-search/actions/game-search.actions';
import { API_GAMES_URL } from '../../../../global/constants/api-constants';
import { stringify } from 'query-string';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss'],
})
export class HeaderSearchComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();

  public searchQuery: string = '';
  public searchResultVisible: boolean = false;
  private hideSearchResult$ = new Subject<void>();

  constructor(
    private readonly iconService: IconService,
    private readonly store$: Store<RootStateInterface>,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initListeners();
  }

  private initListeners(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(() => this.cleanSearchQuery());
  }

  public getSearchIcon(): IconDefinition {
    return this.iconService.searchIcon;
  }

  public getXMarkIcon(): IconDefinition {
    return this.iconService.xMarkIcon;
  }

  public cleanSearchQuery(): void {
    this.searchQuery = '';
    this.hideSearchResult();
  }

  private showSearchResult(): void {
    this.searchResultVisible = true;
  }

  private hideSearchResult(): void {
    this.searchResultVisible = false;
    this.hideSearchResult$.next();
  }

  public searchInput = _.debounce(() => this.searchGames(), 300);

  public searchGames(): void {
    this.showSearchResult();
    this.trackSearchResultOutsideClick();
    this.dispatchSearchGameAction();
  }

  private trackSearchResultOutsideClick(): void {
    fromEvent(window, 'click')
      .pipe(takeUntil(this.hideSearchResult$))
      .subscribe((event: Event) => this.detectSearchResultOutsideClick(event));
  }

  private detectSearchResultOutsideClick(event: Event): void {
    const eventPath = this.getStringFormatEventPath(event);
    if (this.checkIsNeedToHideSearchResult(eventPath)) {
      this.hideSearchResult();
    }
  }

  private getStringFormatEventPath(event: Event): string[] {
    const eventPath = event.composedPath();
    // @ts-ignore * I have no idea how to get it correctly *
    return eventPath.map((event) => event['localName']);
  }

  private checkIsNeedToHideSearchResult(eventPath: string[]): boolean {
    return (
      !eventPath.includes('app-header-search-result') ||
      eventPath.includes('app-header-search-game')
    );
  }

  private dispatchSearchGameAction(): void {
    if (!this.searchQuery.trim()) {
      this.hideSearchResult();
      return;
    }
    const url = `${API_GAMES_URL}?${stringify({
      search: this.searchQuery,
    })}`;
    this.store$.dispatch(GameSearchActions.searchGame({ url }));
  }
}
