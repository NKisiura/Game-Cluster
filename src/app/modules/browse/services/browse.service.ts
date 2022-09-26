import { Injectable } from '@angular/core';
import { NotGamesEntityTypes } from '../../../global/types/entities/entity-types.enum';
import { select, Store } from '@ngrx/store';
import { PlatformsSelectors } from '../../../state/features/platforms/selectors/platforms.selectors';
import { AppStateInterface } from '../../../state/types/app-state.interface';
import { GenresSelectors } from '../../../state/features/genres/selectors/genres.selectors';
import { StoresSelectors } from '../../../state/features/stores/selectors/stores.selectors';
import { TagsSelectors } from '../../../state/features/tags/selectors/tags.selectors';
import { DevelopersSelectors } from '../../../state/features/developers/selectors/developers.selectors';
import { PublishersSelectors } from '../../../state/features/publishers/selectors/publishers.selectors';
import { PlatformsActions } from '../../../state/features/platforms/actions/platforms.actions';
import { DevelopersActions } from '../../../state/features/developers/actions/developers.actions';
import { PublishersActions } from '../../../state/features/publishers/actions/publishers.actions';
import { TagsActions } from '../../../state/features/tags/actions/tags.actions';
import { StoresActions } from '../../../state/features/stores/actions/stores.actions';
import { GenresActions } from '../../../state/features/genres/actions/genres.actions';
import { CreatorsSelectors } from '../../../state/features/creators/selectors/creators.selectors';
import { CreatorsActions } from '../../../state/features/creators/actions/creators.actions';

@Injectable()
export class BrowseService {
  constructor(private readonly store$: Store<AppStateInterface>) {}

  public getEntityViewModelByEntityType(entityType: NotGamesEntityTypes) {
    switch (entityType) {
      case NotGamesEntityTypes.PLATFORMS: {
        return this.store$.pipe(
          select(PlatformsSelectors.platformsViewModelSelector)
        );
      }
      case NotGamesEntityTypes.GENRES: {
        return this.store$.pipe(
          select(GenresSelectors.genresViewModelSelector)
        );
      }
      case NotGamesEntityTypes.STORES: {
        return this.store$.pipe(
          select(StoresSelectors.storesViewModelSelector)
        );
      }
      case NotGamesEntityTypes.TAGS: {
        return this.store$.pipe(select(TagsSelectors.tagsViewModalSelector));
      }
      case NotGamesEntityTypes.DEVELOPERS: {
        return this.store$.pipe(
          select(DevelopersSelectors.developersViewModelSelector)
        );
      }
      case NotGamesEntityTypes.PUBLISHERS: {
        return this.store$.pipe(
          select(PublishersSelectors.publishersViewModelSelector)
        );
      }
      case NotGamesEntityTypes.CREATORS: {
        return this.store$.pipe(
          select(CreatorsSelectors.creatorsViewModelSelector)
        );
      }
      default: {
        return null;
      }
    }
  }

  public getEntityNextPageByEntityType(
    entityType: NotGamesEntityTypes,
    url: string
  ) {
    switch (entityType) {
      case NotGamesEntityTypes.TAGS: {
        return this.store$.dispatch(TagsActions.getTagsNextPage({ url }));
      }
      case NotGamesEntityTypes.STORES: {
        return this.store$.dispatch(StoresActions.getStoresNextPage({ url }));
      }
      case NotGamesEntityTypes.GENRES: {
        return this.store$.dispatch(GenresActions.getGenresNextPage({ url }));
      }
      case NotGamesEntityTypes.PLATFORMS: {
        return this.store$.dispatch(
          PlatformsActions.getPlatformsNextPage({ url })
        );
      }
      case NotGamesEntityTypes.DEVELOPERS: {
        return this.store$.dispatch(
          DevelopersActions.getDevelopersNextPage({ url })
        );
      }
      case NotGamesEntityTypes.PUBLISHERS: {
        return this.store$.dispatch(
          PublishersActions.getPublishersNextPage({ url })
        );
      }
      case NotGamesEntityTypes.CREATORS: {
        return this.store$.dispatch(
          CreatorsActions.getCreatorsNextPage({ url })
        );
      }
      default: {
        return null;
      }
    }
  }
}
