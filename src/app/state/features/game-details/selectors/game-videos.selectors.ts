import { createSelector } from '@ngrx/store';
import { gameDetailsFeatureSelector } from './game-details-feature.selector';
import { GameDetailsStateInterface } from '../types/game-details-state.interface';

export namespace GameVideosSelectors {
  export const gameVideosLoadingSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameVideos.isLoading
  );

  export const gameVideosErrorSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameVideos.error
  );

  export const gameVideosSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameVideos.data?.results || null
  );

  export const gameVideosNextPageSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameVideos.data?.next || null
  );

  export const gameVideosCountSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameVideos.data?.count || null
  );
}
