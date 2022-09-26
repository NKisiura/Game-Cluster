import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { map, skip, Subject, takeUntil } from 'rxjs';
import { NgProgressComponent } from 'ngx-progressbar';
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
import { AppStateInterface } from './state/types/app-state.interface';
import { TagsActions } from './state/features/tags/actions/tags.actions';
import { DevelopersActions } from './state/features/developers/actions/developers.actions';
import { PublishersActions } from './state/features/publishers/actions/publishers.actions';
import { CreatorsActions } from './state/features/creators/actions/creators.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('progressComponent')
  public progressComponent!: NgProgressComponent;
  public isFirstInit: boolean = true;
  public appLoading: boolean = true;
  private appLoadingEnd$: Subject<void> = new Subject<void>();

  constructor(private readonly store$: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.dispatchInitialActions();
  }

  ngAfterViewInit(): void {
    if (this.isFirstInit) {
      this.isFirstInit = false;
      this.progressComponent.state$
        .pipe(
          skip(1),
          map((state) => state.active),
          takeUntil(this.appLoadingEnd$)
        )
        .subscribe((status) => this.endLoading(status));
    }
  }

  private endLoading(loadingStatus: boolean): void {
    if (!loadingStatus) {
      this.appLoading = false;
      this.appLoadingEnd$.next();
      this.appLoadingEnd$.complete();
    }
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
  }
}
