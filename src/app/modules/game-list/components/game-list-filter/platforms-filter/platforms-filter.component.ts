import { Component, OnInit } from '@angular/core';
import { map, Observable, Subject, takeUntil } from 'rxjs';
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
export class PlatformsFilterComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();

  public platformsList$ = new Observable<PlatformInterface[] | null>();
  public selectedPlatformId: number | null = null;

  constructor(
    private readonly store$: Store<RootStateInterface>,
    private readonly mainEntitiesService: MainEntitiesService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initListeners();
    this.initValues();
  }

  private initListeners(): void {
    this.activatedRoute.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        this.selectedPlatformId = +params['platforms'] || null;
      });
  }

  private initValues(): void {
    this.platformsList$ = this.store$.pipe(
      select(PlatformsSelectors.platformsListSelector),
      map((platforms: PlatformInterface[] | null) => {
        return platforms
          ? this.filterPlatformsListAccordingToMainPlatforms(platforms)
          : platforms;
      })
    );
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
