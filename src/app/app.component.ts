import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, filter, Subject, takeUntil } from 'rxjs';
import { PlatformsActions } from './state/features/platforms/actions/platforms.actions';
import {
  API_CREATORS_URL,
  API_DEVELOPERS_URL,
  API_GENRES_URL,
  API_PLATFORMS_URL,
  API_PUBLISHERS_URL,
  API_STORES_URL,
  API_TAGS_URL,
} from './global/constants/api-constants';
import { GenresActions } from './state/features/genres/actions/genres.actions';
import { StoresActions } from './state/features/stores/actions/stores.actions';
import { Store } from '@ngrx/store';
import { RootStateInterface } from './state/types/root-state.interface';
import { TagsActions } from './state/features/tags/actions/tags.actions';
import { DevelopersActions } from './state/features/developers/actions/developers.actions';
import { PublishersActions } from './state/features/publishers/actions/publishers.actions';
import { CreatorsActions } from './state/features/creators/actions/creators.actions';
import { NavigationEnd, Router } from '@angular/router';
import { TotalGamesCountActions } from './state/features/app/actions/total-games-count.actions';
import { PlatformsSelectors } from './state/features/platforms/selectors/platforms.selectors';
import { DevelopersSelectors } from './state/features/developers/selectors/developers.selectors';
import { PublishersSelectors } from './state/features/publishers/selectors/publishers.selectors';
import { CreatorsSelectors } from './state/features/creators/selectors/creators.selectors';
import { GenresSelectors } from './state/features/genres/selectors/genres.selectors';
import { StoresSelectors } from './state/features/stores/selectors/stores.selectors';
import { TagsSelectors } from './state/features/tags/selectors/tags.selectors';
import { AppSelectors } from './state/features/app/selectors/app.selectors';
import { GamesSelectors } from './state/features/games/selectors/games.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  private appLoadingEnd$: Subject<void> = new Subject<void>();
  public appLoading: boolean = true;

  constructor(
    private readonly store$: Store<RootStateInterface>,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initRouterNavigationListener();
    this.dispatchInitialActions();
  }

  ngAfterViewInit(): void {
    this.trackAppLoadingEnd();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initRouterNavigationListener(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(() => {
        window.scroll({ behavior: 'smooth', top: 0 });
      });
  }

  private trackAppLoadingEnd(): void {
    combineLatest([
      this.store$.select(PlatformsSelectors.platformsLoadingSelector),
      this.store$.select(DevelopersSelectors.developersLoadingSelector),
      this.store$.select(PublishersSelectors.publishersLoadingSelector),
      this.store$.select(CreatorsSelectors.creatorsLoadingSelector),
      this.store$.select(GenresSelectors.genresLoadingSelector),
      this.store$.select(StoresSelectors.storesLoadingSelector),
      this.store$.select(TagsSelectors.tagsLoadingSelector),
      this.store$.select(AppSelectors.totalGamesCountLoading),
      this.store$.select(GamesSelectors.gamesLoadingSelector),
    ])
      .pipe(
        filter(
          ([...loadingStatuses]: boolean[]) => !loadingStatuses.includes(true)
        ),
        takeUntil(this.appLoadingEnd$)
      )
      .subscribe(() => this.completeAppLoading());
  }

  private completeAppLoading(): void {
    this.appLoading = false;
    this.appLoadingEnd$.next();
    this.appLoadingEnd$.complete();
  }

  private dispatchInitialActions(): void {
    this.store$.dispatch(
      PlatformsActions.getPlatforms({ url: API_PLATFORMS_URL })
    );
    this.store$.dispatch(
      DevelopersActions.getDevelopers({ url: API_DEVELOPERS_URL })
    );
    this.store$.dispatch(
      PublishersActions.getPublishers({ url: API_PUBLISHERS_URL })
    );
    this.store$.dispatch(
      CreatorsActions.getCreators({ url: API_CREATORS_URL })
    );
    this.store$.dispatch(GenresActions.getGenres({ url: API_GENRES_URL }));
    this.store$.dispatch(StoresActions.getStores({ url: API_STORES_URL }));
    this.store$.dispatch(TagsActions.getTags({ url: API_TAGS_URL }));
    this.store$.dispatch(TotalGamesCountActions.getTotalGamesCount());
  }
}
