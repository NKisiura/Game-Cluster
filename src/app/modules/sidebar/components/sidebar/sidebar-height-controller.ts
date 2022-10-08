import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class SidebarHeightController {
  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  public defineSidebarHeight(): string {
    const headerElement = this.document.getElementById('header') as HTMLElement;
    const headerHeight = headerElement.clientHeight;
    const headerPosition = headerElement.getBoundingClientRect();
    const headerPixelsInView = headerHeight + headerPosition.y;
    return headerPixelsInView <= 0
      ? '100vh'
      : `calc(100vh - ${headerPixelsInView}px)`;
  }
}
