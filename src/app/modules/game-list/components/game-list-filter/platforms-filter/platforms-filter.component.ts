import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subject, takeUntil } from 'rxjs';
import { PlatformInterface } from '../../../../../global/types/entities/platforms/platform.interface';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../../state/types/root-state.interface';
import { PlatformsSelectors } from '../../../../../state/features/platforms/selectors/platforms.selectors';
import { MainEntitiesService } from '../../../../../global/utils/services/main-entities.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-platforms-filter',
  templateUrl: './platforms-filter.component.html',
})
export class PlatformsFilterComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  public platformsList: PlatformInterface[] = [];
  public selectedPlatformId: number | null = null;

  constructor(
    private readonly store$: Store<RootStateInterface>,
    private readonly mainEntitiesService: MainEntitiesService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initListeners();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initListeners(): void {
    this.store$
      .pipe(
        select(PlatformsSelectors.platformsListSelector),
        filter(Boolean),
        map((platforms: PlatformInterface[]) =>
          this.filterPlatformsListAccordingToMainPlatforms(platforms)
        ),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((platforms) => (this.platformsList = platforms));

    this.activatedRoute.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        const platformId = +params['platforms'] || null;
        if (platformId) {
          const isMainPlatform = this.checkIsPlatformMain(platformId);
          this.selectedPlatformId = isMainPlatform ? platformId : null;
        } else {
          this.selectedPlatformId = null;
        }
      });
  }

  private checkIsPlatformMain(platformId: number): boolean {
    return !!this.platformsList.find((platform) => platform.id === platformId);
  }

  private filterPlatformsListAccordingToMainPlatforms(
    platforms: PlatformInterface[]
  ): PlatformInterface[] {
    return platforms.filter((platform) =>
      this.mainEntitiesService.getMainPlatformsList().includes(platform.slug)
    );
  }

  public async platformsFilterChange(
    platform: PlatformInterface | undefined
  ): Promise<void> {
    await this.navigateWithPlatformsParams(platform ? platform.id : null);
  }

  private async navigateWithPlatformsParams(
    platformId: number | null
  ): Promise<void> {
    await this.router.navigate([], {
      queryParams: { platforms: platformId },
      queryParamsHandling: 'merge',
    });
  }
}
