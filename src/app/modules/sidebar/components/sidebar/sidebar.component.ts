import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '../../../../state/types/app-state.interface';
import { Observable } from 'rxjs';
import { PlatformInterface } from '../../../../global/types/entities/platforms/platform.interface';
import { PlatformsSelectors } from '../../../../state/features/platforms/selectors/platforms.selectors';
import { PlatformsActions } from '../../../../state/features/platforms/actions/platforms.actions';
import {
  API_GENRES_URL,
  API_PLATFORMS_URL,
} from '../../../../global/constants/api-constants';
import { BackendErrorResponseInterface } from '../../../../state/types/backend-error-response.interface';
import { GenreInterface } from '../../../../global/types/entities/genres/genre.interface';
import { GenresSelectors } from '../../../../state/features/genres/selectors/genres.selectors';
import { GenresActions } from '../../../../state/features/genres/actions/genres.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  public platformsLoading$ = new Observable<boolean>();
  public platformsError$ =
    new Observable<BackendErrorResponseInterface | null>();
  public platformsList$ = new Observable<PlatformInterface[] | null>();

  public genresLoading$ = new Observable<boolean>();
  public genresError$ = new Observable<BackendErrorResponseInterface | null>();
  public genresList$ = new Observable<GenreInterface[] | null>();

  constructor(private store$: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.initActions();
    this.initValues();
  }

  private initActions(): void {
    this.store$.dispatch(
      PlatformsActions.getPlatforms({ url: API_PLATFORMS_URL })
    );
    this.store$.dispatch(GenresActions.getGenres({ url: API_GENRES_URL }));
  }

  private initValues(): void {
    this.initPlatformsValues();
    this.initGenresValues();
  }

  private initPlatformsValues(): void {
    this.platformsLoading$ = this.store$.pipe(
      select(PlatformsSelectors.platformsLoadingSelector)
    );
    this.platformsError$ = this.store$.pipe(
      select(PlatformsSelectors.platformsErrorSelector)
    );
    this.platformsList$ = this.store$.pipe(
      select(PlatformsSelectors.platformsListSelector)
    );
  }

  private initGenresValues(): void {
    this.genresLoading$ = this.store$.pipe(
      select(GenresSelectors.genresLoadingSelector)
    );
    this.genresError$ = this.store$.pipe(
      select(GenresSelectors.genresErrorSelector)
    );
    this.genresList$ = this.store$.pipe(
      select(GenresSelectors.genresListSelector)
    );
  }
}
