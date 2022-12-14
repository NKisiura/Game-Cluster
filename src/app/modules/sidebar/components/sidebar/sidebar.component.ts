import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../state/types/root-state.interface';
import { PlatformsSelectors } from '../../../../state/features/platforms/selectors/platforms.selectors';
import { GenresSelectors } from '../../../../state/features/genres/selectors/genres.selectors';
import { StoresSelectors } from '../../../../state/features/stores/selectors/stores.selectors';
import { MainEntitiesService } from '../../../../global/utils/services/main-entities.service';
import { RouterLinks } from '../../../../global/constants/router-links';
import { NotGamesEntityTypes } from '../../../../global/types/entities/entity-types.enum';
import { NotGameEntity } from '../../../../global/types/entities/not-game-entity';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { SidebarHeightController } from './sidebar-height-controller';
import { IconService } from '../../../../global/utils/services/icon.service';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements AfterViewInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  @ViewChild('sidebarElement')
  public sidebarElement!: ElementRef<HTMLDivElement>;
  public gamesRouterLink: string = RouterLinks.GAMES_ROUTER_LINK;
  public browseRouterLink: string = RouterLinks.BROWSE_ROUTER_LINK;
  public sidebarEntities = [
    NotGamesEntityTypes.PLATFORMS,
    NotGamesEntityTypes.GENRES,
    NotGamesEntityTypes.STORES,
  ];

  constructor(
    private readonly store$: Store<RootStateInterface>,
    private readonly mainEntitiesService: MainEntitiesService,
    private readonly sidebarHeightController: SidebarHeightController,
    private readonly iconService: IconService
  ) {}

  ngAfterViewInit(): void {
    fromEvent(window, 'scroll')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => this.setSidebarHeight());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private setSidebarHeight(): void {
    this.sidebarElement.nativeElement.style.setProperty(
      'height',
      this.defineSidebarHeight()
    );
  }

  public defineSidebarHeight(): string {
    return this.sidebarHeightController.defineSidebarHeight();
  }

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
      default: {
        return null;
      }
    }
  }

  public filterEntityListAccordingToMainEntitiesByEntityType(
    entityList: NotGameEntity[],
    entityType: NotGamesEntityTypes
  ): NotGameEntity[] {
    switch (entityType) {
      case NotGamesEntityTypes.PLATFORMS: {
        return entityList.filter((entity) =>
          this.mainEntitiesService.getMainPlatformsList().includes(entity.slug)
        );
      }
      case NotGamesEntityTypes.GENRES: {
        return entityList.filter((entity) =>
          this.mainEntitiesService.getMainGenresList().includes(entity.slug)
        );
      }
      case NotGamesEntityTypes.STORES: {
        return entityList.filter((entity) =>
          this.mainEntitiesService.getMainStoresList().includes(entity.slug)
        );
      }
      default: {
        return [];
      }
    }
  }

  public getSidebarControlButtonIcons(isOpened: boolean): IconDefinition {
    return isOpened ? this.iconService.xMarkIcon : this.iconService.barsIcon;
  }
}
