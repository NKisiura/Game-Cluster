import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TagInterface } from '../../../../../global/types/entities/tags/tag.interface';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../../state/types/root-state.interface';
import { IconService } from '../../../../../global/utils/services/icon.service';
import { TagsSelectors } from '../../../../../state/features/tags/selectors/tags.selectors';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-tags-filter',
  templateUrl: './tags-filter.component.html',
  styleUrls: ['./tags-filter.component.scss'],
})
export class TagsFilterComponent implements OnInit {
  public slicedTagList: boolean = true;
  public slicedTagListLength: number = 5;

  public tagsList$ = new Observable<TagInterface[] | null>();
  public currentTagsInParams: string[] = [];

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
    this.activatedRoute.queryParams.subscribe((params) => {
      this.currentTagsInParams = params['tags']?.split(',') || [];
    });
  }

  private initValues(): void {
    this.tagsList$ = this.store$.pipe(select(TagsSelectors.tagsListSelector));
  }

  public getTagList(tagList: TagInterface[]): TagInterface[] {
    return this.slicedTagList
      ? tagList.slice(0, this.slicedTagListLength)
      : tagList;
  }

  public async addTagQueryParam(tagSlug: string): Promise<void> {
    const newTagsParams = _.chain([...this.currentTagsInParams, tagSlug])
      .uniq()
      .join(',')
      .value();
    await this.navigateWithTagParams(newTagsParams);
  }

  public async removeTagQueryParam(tagSlug: string): Promise<void> {
    const newTagsParams =
      _.chain(this.currentTagsInParams)
        .filter((tag) => tag !== tagSlug)
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
