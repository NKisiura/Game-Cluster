import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RootStateInterface } from '../../../../../state/types/root-state.interface';
import { Observable } from 'rxjs';
import { GameDetailsInterface } from '../../../../../global/types/entities/games/game-details.interface';
import { GameDetailsSelectors } from '../../../../../state/features/game-details/selectors/game-details.selectors';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { IconService } from '../../../../../global/utils/services/icon.service';
import { RouterLinks } from '../../../../../global/constants/router-links';

@Component({
  selector: 'app-game-partition-wrapper',
  templateUrl: './game-partition-wrapper.component.html',
})
export class GamePartitionWrapperComponent implements OnInit {
  public gameDetails$ = new Observable<GameDetailsInterface | null>();
  public gameRouterLink: string = RouterLinks.GAME_ROUTER_LINK;

  constructor(
    private readonly store$: Store<RootStateInterface>,
    private readonly iconService: IconService
  ) {}

  ngOnInit(): void {
    this.initValues();
  }

  private initValues(): void {
    this.gameDetails$ = this.store$.pipe(
      select(GameDetailsSelectors.gameSelector)
    );
  }

  public getLongArrowLeftIcon(): IconDefinition {
    return this.iconService.getLongArrowIcons().left;
  }
}
