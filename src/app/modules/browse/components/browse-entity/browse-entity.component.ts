import { Component, OnInit } from '@angular/core';
import { BrowseService } from '../../services/browse.service';
import { NotGamesEntityTypes } from '../../../../global/types/entities/entity-types.enum';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-browse-entity',
  templateUrl: './browse-entity.component.html',
})
export class BrowseEntityComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();
  public entityType!: NotGamesEntityTypes;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly browseService: BrowseService
  ) {}

  ngOnInit(): void {
    this.initListeners();
  }

  public getEntityViewModelByEntityType(entityType: NotGamesEntityTypes) {
    return this.browseService.getEntityViewModelByEntityType(entityType);
  }

  private defineCurrentEntityType(params: Params): void {
    this.entityType = params['entity'];
  }

  private initListeners(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: Params) => this.defineCurrentEntityType(params));
  }
}
