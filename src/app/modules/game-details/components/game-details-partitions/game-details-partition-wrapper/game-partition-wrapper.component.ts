import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../../state/types/root-state.interface';
import { Observable, Subject, takeUntil } from 'rxjs';
import { GameDetailsInterface } from '../../../../../global/types/entities/games/game-details.interface';
import { GameDetailsSelectors } from '../../../../../state/features/game-details/selectors/game-details.selectors';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { IconService } from '../../../../../global/utils/services/icon.service';
import { RouterLinks } from '../../../../../global/constants/router-links';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-partition-wrapper',
  templateUrl: './game-partition-wrapper.component.html',
})
export class GamePartitionWrapperComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  public gameDetails$ = new Observable<GameDetailsInterface | null>();
  public currentBreadcrumbs: string = '';
  public gameRouterLink: string = RouterLinks.GAME_ROUTER_LINK;

  constructor(
    private readonly store$: Store<RootStateInterface>,
    private readonly activatedRoute: ActivatedRoute,
    private readonly iconService: IconService
  ) {}

  ngOnInit(): void {
    this.initListeners();
    this.initValues();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initValues(): void {
    this.gameDetails$ = this.store$.pipe(
      select(GameDetailsSelectors.gameSelector)
    );
  }

  private initListeners(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.currentBreadcrumbs =
          this.activatedRoute.snapshot.data['breadcrumbs'];
      });
  }

  public getLongArrowLeftIcon(): IconDefinition {
    return this.iconService.getLongArrowIcons().left;
  }
}
