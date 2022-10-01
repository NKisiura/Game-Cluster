import { createFeatureSelector } from '@ngrx/store';
import { GameDetailsStateInterface } from '../types/game-details-state.interface';
import { gameDetailsFeatureKey } from '../types/game-details-feature-key';

export const gameDetailsFeatureSelector =
  createFeatureSelector<GameDetailsStateInterface>(gameDetailsFeatureKey);
