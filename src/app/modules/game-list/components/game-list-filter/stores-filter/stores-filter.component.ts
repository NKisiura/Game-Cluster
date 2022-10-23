import { Component, OnInit } from '@angular/core';
import { filter, map, Subject, takeUntil } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../../state/types/root-state.interface';
import { MainEntitiesService } from '../../../../../global/utils/services/main-entities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreInterface } from '../../../../../global/types/entities/stores/store.interface';
import { StoresSelectors } from '../../../../../state/features/stores/selectors/stores.selectors';

@Component({
  selector: 'app-stores-filter',
  templateUrl: './stores-filter.component.html',
})
export class StoresFilterComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();

  public storesList: StoreInterface[] = [];
  public selectedStoreId: number | null = null;

  constructor(
    private readonly store$: Store<RootStateInterface>,
    private readonly mainEntitiesService: MainEntitiesService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initListeners();
  }

  private initListeners(): void {
    this.store$
      .pipe(
        select(StoresSelectors.storesListSelector),
        filter(Boolean),
        map((stores: StoreInterface[]) =>
          this.filterStoresListAccordingToMainStores(stores)
        ),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((stores) => (this.storesList = stores));

    this.activatedRoute.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        const storeId = +params['stores'] || null;
        if (storeId) {
          const isMainStore = this.checkIsStoreMain(storeId);
          this.selectedStoreId = isMainStore ? storeId : null;
        } else {
          this.selectedStoreId = null;
        }
      });
  }

  private checkIsStoreMain(storeId: number): boolean {
    return !!this.storesList.find((store) => store.id === storeId);
  }

  private filterStoresListAccordingToMainStores(
    stores: StoreInterface[]
  ): StoreInterface[] {
    return stores.filter((store) =>
      this.mainEntitiesService.getMainStoresList().includes(store.slug)
    );
  }

  public async storesFilterChange(
    store: StoreInterface | undefined
  ): Promise<void> {
    await this.navigateWithStoresParams(store ? store.id : null);
  }

  private async navigateWithStoresParams(
    storeId: number | null
  ): Promise<void> {
    await this.router.navigate([], {
      queryParams: { stores: storeId },
      queryParamsHandling: 'merge',
    });
  }
}
