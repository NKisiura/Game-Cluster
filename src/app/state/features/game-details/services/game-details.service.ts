import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  API_BASE_URL,
  API_GAME_SCREENSHOTS_URL,
  API_GAMES_URL,
} from '../../../../global/constants/api-constants';
import { GameDetailsInterface } from '../../../../global/types/entities/games/game-details.interface';
import { Observable } from 'rxjs';
import { GetGameScreenshotsResponseInterface } from '../types/game-details-state.interface';

@Injectable()
export class GameDetailsService {
  constructor(private http: HttpClient) {}

  public getGame(url: string): Observable<GameDetailsInterface> {
    return this.http.get<GameDetailsInterface>(API_BASE_URL + url);
  }

  public getGameScreenshots(
    gameId: number
  ): Observable<GetGameScreenshotsResponseInterface> {
    return this.http.get<GetGameScreenshotsResponseInterface>(
      `${API_BASE_URL}${API_GAMES_URL}/${gameId}/${API_GAME_SCREENSHOTS_URL}`
    );
  }
}
