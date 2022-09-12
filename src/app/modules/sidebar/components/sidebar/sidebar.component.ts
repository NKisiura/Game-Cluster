import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '../../../../state/types/app-state.interface';
import { filter, map, Observable } from 'rxjs';
import { PlatformInterface } from '../../../../global/types/entities/platforms/platform.interface';
import { PlatformsSelectors } from '../../../../state/features/platforms/selectors/platforms.selectors';
import { PlatformsActions } from '../../../../state/features/platforms/actions/platforms.actions';
import {
  API_GENRES_URL,
  API_PLATFORMS_URL,
  API_STORES_URL,
} from '../../../../global/constants/api-constants';
import { BackendErrorResponseInterface } from '../../../../state/types/backend-error-response.interface';
import { GenreInterface } from '../../../../global/types/entities/genres/genre.interface';
import { GenresSelectors } from '../../../../state/features/genres/selectors/genres.selectors';
import { GenresActions } from '../../../../state/features/genres/actions/genres.actions';
import { StoresActions } from '../../../../state/features/stores/actions/stores.actions';
import { StoreInterface } from '../../../../global/types/entities/stores/store.interface';
import { StoresSelectors } from '../../../../state/features/stores/selectors/stores.selectors';
import { MainEntitiesService } from '../../../../global/utils/services/main-entities.service';
import { RouterLinks } from '../../../../global/constants/router-links';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public gamesRouterLink: string = RouterLinks.GAMES_ROUTER_LINK;

  public platformsLoading$ = new Observable<boolean>();
  public platformsError$ =
    new Observable<BackendErrorResponseInterface | null>();
  public platformsList$ = new Observable<PlatformInterface[] | null>();

  public genresLoading$ = new Observable<boolean>();
  public genresError$ = new Observable<BackendErrorResponseInterface | null>();
  public genresList$ = new Observable<GenreInterface[] | null>();

  public storesLoading$ = new Observable<boolean>();
  public storesError$ = new Observable<BackendErrorResponseInterface | null>();
  public storesList$ = new Observable<StoreInterface[] | null>();

  constructor(
    private store$: Store<AppStateInterface>,
    private mainEntitiesService: MainEntitiesService
  ) {}

  ngOnInit(): void {
    this.initActions();
    this.initValues();
  }

  private initActions(): void {
    this.store$.dispatch(
      PlatformsActions.getPlatforms({ url: API_PLATFORMS_URL })
    );
    this.store$.dispatch(GenresActions.getGenres({ url: API_GENRES_URL }));
    this.store$.dispatch(StoresActions.getStores({ url: API_STORES_URL }));
  }

  private initValues(): void {
    this.initPlatformsValues();
    this.initGenresValues();
    this.initStoresValues();
  }

  private initPlatformsValues(): void {
    this.platformsLoading$ = this.store$.pipe(
      select(PlatformsSelectors.platformsLoadingSelector)
    );
    this.platformsError$ = this.store$.pipe(
      select(PlatformsSelectors.platformsErrorSelector)
    );
    this.platformsList$ = this.store$.pipe(
      select(PlatformsSelectors.platformsListSelector),
      filter(Boolean),
      map((platformList: PlatformInterface[]) =>
        platformList.filter((platform: PlatformInterface) =>
          this.mainEntitiesService
            .getMainPlatformsList()
            .includes(platform.slug)
        )
      )
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
      select(GenresSelectors.genresListSelector),
      filter(Boolean),
      map((genresList: GenreInterface[]) =>
        genresList.filter((genre: GenreInterface) =>
          this.mainEntitiesService.getMainGenresList().includes(genre.slug)
        )
      )
    );
  }

  private initStoresValues(): void {
    this.storesLoading$ = this.store$.pipe(
      select(StoresSelectors.storesLoadingSelector)
    );
    this.storesError$ = this.store$.pipe(
      select(StoresSelectors.storesErrorSelector)
    );
    this.storesList$ = this.store$.pipe(
      select(StoresSelectors.storesListSelector),
      filter(Boolean),
      map((storesList: StoreInterface[]) =>
        storesList.filter((store: StoreInterface) =>
          this.mainEntitiesService.getMainStoresList().includes(store.slug)
        )
      )
    );
  }
}
