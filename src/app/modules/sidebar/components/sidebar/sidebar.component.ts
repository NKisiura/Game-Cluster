import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '../../../../state/types/app-state.interface';
import { Observable } from 'rxjs';
import { PlatformInterface } from '../../../../global/types/entities/platforms/platform.interface';
import { PlatformsSelectors } from '../../../../state/features/platforms/selectors/platforms.selectors';
import { PlatformsActions } from '../../../../state/features/platforms/actions/platforms.actions';
import { API_PLATFORMS_URL } from '../../../../global/constants/api-constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  public platformsLoading$ = new Observable<boolean>();
  public platformsError$ = new Observable<boolean>();
  public platformsList$ = new Observable<PlatformInterface[] | null>();
  public platformsNextPage$ = new Observable<string | null>();

  constructor(private store$: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.initActions();
    this.initValues();
  }

  private initActions(): void {
    this.store$.dispatch(
      PlatformsActions.getPlatforms({ url: API_PLATFORMS_URL })
    );
  }

  private initValues(): void {
    this.platformsLoading$ = this.store$.pipe(
      select(PlatformsSelectors.platformsLoadingSelector)
    );
    this.platformsError$ = this.store$.pipe(
      select(PlatformsSelectors.platformsErrorSelector)
    );
    this.platformsList$ = this.store$.pipe(
      select(PlatformsSelectors.platformsListSelector)
    );
    this.platformsNextPage$ = this.store$.pipe(
      select(PlatformsSelectors.platformsNextPageSelector)
    );
  }
}
