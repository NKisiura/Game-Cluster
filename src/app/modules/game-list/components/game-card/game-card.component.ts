import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { GameInterface } from '../../../../global/types/entities/games/game.interface';
import { RouterLinks } from '../../../../global/constants/router-links';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCardComponent implements AfterViewChecked {
  public gameRouterLink: string = RouterLinks.GAME_ROUTER_LINK;
  @Input('game') public game!: GameInterface;
  @ViewChild('gameCard') public gameCardElement!: ElementRef<HTMLDivElement>;
  public initialCardHeight!: number;
  public isCardHovered: boolean = false;

  ngAfterViewChecked(): void {
    if (!this.initialCardHeight) {
      this.initialCardHeight = this.gameCardElement.nativeElement.offsetHeight;
    }
  }

  public mouseEnterGameCard(): void {
    this.isCardHovered = true;
    this.gameCardElement.nativeElement.style.height =
      this.initialCardHeight.toString() + 'px';
  }

  public mouseLeaveGameCard(): void {
    this.isCardHovered = false;
    this.gameCardElement.nativeElement.style.height = '100%';
  }
}
