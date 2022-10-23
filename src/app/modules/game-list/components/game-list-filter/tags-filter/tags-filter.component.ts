import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TagInterface } from '../../../../../global/types/entities/tags/tag.interface';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../../state/types/root-state.interface';
import { IconService } from '../../../../../global/utils/services/icon.service';
import { TagsSelectors } from '../../../../../state/features/tags/selectors/tags.selectors';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-tags-filter',
  templateUrl: './tags-filter.component.html',
  styleUrls: ['./tags-filter.component.scss'],
})
export class TagsFilterComponent implements OnInit {
  public slicedTagList: boolean = true;
  public slicedTagListLength: number = 5;
  public maxTagListLength: number = 9;

  public tagsList$ = new Observable<TagInterface[] | null>();
  public currentTagsInParams: number[] = [];

  constructor(
    private readonly store$: Store<RootStateInterface>,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly iconService: IconService
  ) {}

  ngOnInit(): void {
    this.initListeners();
    this.initValues();
  }

  private initListeners(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.currentTagsInParams = this.getTagIdListFromParams(params);
    });
  }

  private initValues(): void {
    this.tagsList$ = this.store$.pipe(
      select(TagsSelectors.tagsListSelector),
      map((tags) => (tags ? tags.slice(0, this.maxTagListLength) : tags))
    );
  }

  private getTagIdListFromParams(params: Params): number[] {
    return params['tags']?.split(',').map(Number) || [];
  }

  public getTagList(tagList: TagInterface[]): TagInterface[] {
    return this.slicedTagList
      ? tagList.slice(0, this.slicedTagListLength)
      : tagList;
  }

  public async addTagQueryParam(tagId: number): Promise<void> {
    const newTagsParams = _.chain([...this.currentTagsInParams, tagId])
      .uniq()
      .join(',')
      .value();
    await this.navigateWithTagParams(newTagsParams);
  }

  public async removeTagQueryParam(tagId: number): Promise<void> {
    const newTagsParams =
      _.chain(this.currentTagsInParams)
        .filter((tag) => tag !== tagId)
        .join(',')
        .value() || null;
    await this.navigateWithTagParams(newTagsParams);
  }

  private async navigateWithTagParams(tagParams: string | null): Promise<void> {
    await this.router.navigate([], {
      queryParams: { tags: tagParams },
      queryParamsHandling: 'merge',
    });
  }

  public getEllipsisIcon(): IconDefinition {
    return this.iconService.ellipsisIcon;
  }

  public getXMarkIcon(): IconDefinition {
    return this.iconService.xMarkIcon;
  }
}
