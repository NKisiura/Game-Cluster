import { Component, OnInit, ViewChild } from '@angular/core';
import { BrowseService } from '../../services/browse.service';
import { NotGamesEntityTypes } from '../../../../global/types/entities/entity-types.enum';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LoadMoreButtonComponent } from '../../../../global/modules/layouts/load-more-button/components/load-more-button/load-more-button.component';
import { TitleService } from '../../../../global/utils/services/title.service';

@Component({
  selector: 'app-browse-entity',
  templateUrl: './browse-entity.component.html',
})
export class BrowseEntityComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();

  @ViewChild('loadMoreButton')
  private loadMoreButtonElement!: LoadMoreButtonComponent;
  public entityType!: NotGamesEntityTypes;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly browseService: BrowseService,
    private readonly titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.initListeners();
  }

  public getEntityViewModelByEntityType(entityType: NotGamesEntityTypes) {
    return this.browseService.getEntityViewModelByEntityType(entityType);
  }

  public loadMoreEntitiesOnScrollDown(): void {
    if (this.loadMoreButtonElement) this.loadMoreButtonElement.click();
  }

  public loadMoreEntities(entityType: NotGamesEntityTypes, url: string): void {
    this.browseService.getEntityNextPageByEntityType(entityType, url);
  }

  private defineCurrentEntityType(params: Params): void {
    this.entityType = params['entity'];
    this.setPageTitle(this.entityType);
  }

  private initListeners(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: Params) => this.defineCurrentEntityType(params));
  }

  private setPageTitle(entityType: string): void {
    this.titleService.setTitle(['Browse', entityType]);
  }
}
