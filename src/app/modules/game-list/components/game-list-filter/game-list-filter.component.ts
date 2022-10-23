import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlatformInterface } from '../../../../global/types/entities/platforms/platform.interface';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../state/types/root-state.interface';
import { PlatformsSelectors } from '../../../../state/features/platforms/selectors/platforms.selectors';
import { GenreInterface } from '../../../../global/types/entities/genres/genre.interface';
import { StoreInterface } from '../../../../global/types/entities/stores/store.interface';
import { GenresSelectors } from '../../../../state/features/genres/selectors/genres.selectors';
import { StoresSelectors } from '../../../../state/features/stores/selectors/stores.selectors';

@Component({
  selector: 'app-game-list-filter',
  templateUrl: './game-list-filter.component.html',
})
export class GameListFilterComponent implements OnInit {
  public platforms$ = new Observable<PlatformInterface[] | null>();
  public genres$ = new Observable<GenreInterface[] | null>();
  public stores$ = new Observable<StoreInterface[] | null>();

  constructor(private readonly store$: Store<RootStateInterface>) {}

  ngOnInit(): void {
    this.initValues();
  }

  private initValues(): void {
    this.platforms$ = this.store$.pipe(
      select(PlatformsSelectors.platformsListSelector)
    );
    this.genres$ = this.store$.pipe(select(GenresSelectors.genresListSelector));
    this.stores$ = this.store$.pipe(select(StoresSelectors.storesListSelector));
  }
}
