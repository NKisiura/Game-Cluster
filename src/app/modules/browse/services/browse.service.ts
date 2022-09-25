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
      default: {
        return null;
      }
    }
  }
}
