import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { APP_NAME } from '../../constants/app-name-constant';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private readonly BASE_PAGE_TITLE = APP_NAME;
  private readonly TITLE_SEPARATOR = ' • ';

  constructor(private readonly title: Title) {}

  public setTitle(titlePath: string[]): void {
    this.title.setTitle(this.buildPageTitleString(titlePath));
  }

  public getTitle(): string {
    return this.title.getTitle();
  }

  public setBasePageTitle(): void {
    this.title.setTitle(this.BASE_PAGE_TITLE);
  }

  private buildPageTitleString(titlePath: string[]): string {
    const formattedPageTitle = _.chain(titlePath)
      .map(this.formatPageTitleItem)
      .join(this.TITLE_SEPARATOR)
      .value();
    return `${this.BASE_PAGE_TITLE}${this.TITLE_SEPARATOR}${formattedPageTitle}`;
  }

  private formatPageTitleItem(titlePageItem: string): string {
    return _.chain(titlePageItem)
      .split(' ')
      .map(_.capitalize)
      .join(' ')
      .value();
  }
}
