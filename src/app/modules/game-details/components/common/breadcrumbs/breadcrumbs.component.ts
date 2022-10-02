import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { RouterLinks } from '../../../../../global/constants/router-links';
import { GameDetailsInterface } from '../../../../../global/types/entities/games/game-details.interface';
import GAMES_ROUTER_LINK = RouterLinks.GAMES_ROUTER_LINK;
import GAME_ROUTER_LINK = RouterLinks.GAME_ROUTER_LINK;

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  @Input('game') public game!: GameDetailsInterface;
  public breadcrumbs: BreadcrumbItem[] = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initListeners();
    this.updateBreadcrumbs();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initListeners(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(() => this.updateBreadcrumbs());
  }

  private updateBreadcrumbs(): void {
    this.breadcrumbs = this.getCurrentBreadcrumbs();
  }

  private getCurrentBreadcrumbs(): BreadcrumbItem[] {
    if (this.checkIsPartitionOpened()) {
      return [
        ...this.getInitialBreadcrumbs(),
        this.getCurrentGamePartitionBreadcrumbItem(),
      ];
    }
    return this.getInitialBreadcrumbs();
  }

  private checkIsPartitionOpened(): boolean {
    return !!this.activatedRoute.snapshot.firstChild?.data['breadcrumbs'];
  }

  private getInitialBreadcrumbs(): BreadcrumbItem[] {
    const gamesBreadcrumbItem: BreadcrumbItem = {
      url: GAMES_ROUTER_LINK,
      name: 'games',
    };
    const currentGameBreadcrumbItem: BreadcrumbItem = {
      url: `${GAME_ROUTER_LINK}/${this.game.slug}`,
      name: this.game.name,
    };
    return [gamesBreadcrumbItem, currentGameBreadcrumbItem];
  }

  private getCurrentGamePartitionBreadcrumbItem(): BreadcrumbItem {
    const routeSnapshot = this.activatedRoute.snapshot.firstChild;
    return {
      url: routeSnapshot?.routeConfig?.path || '',
      name: routeSnapshot?.data['breadcrumbs'],
    };
  }
}

interface BreadcrumbItem {
  readonly url: string;
  readonly name: string;
}
