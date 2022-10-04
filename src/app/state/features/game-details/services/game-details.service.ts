import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  API_ADDITION_PARENT_GAMES_URL,
  API_BASE_URL,
  API_GAME_ACHIEVEMENTS_URL,
  API_GAME_ADDITIONS_URL,
  API_GAME_SCREENSHOTS_URL,
  API_GAME_SERIES_URL,
  API_GAMES_URL,
} from '../../../../global/constants/api-constants';
import { GameDetailsInterface } from '../../../../global/types/entities/games/game-details.interface';
import { Observable } from 'rxjs';
import { GetGameScreenshotsResponseInterface } from '../types/get-game-screenshots-response.interface';
import { GetGameAchievementsResponseInterface } from '../types/get-game-achievements-response.interface';
import { GetGamesResponseInterface } from '../../games/types/get-games-response.interface';

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

  public getGameScreenshotsNextPage(
    url: string
  ): Observable<GetGameScreenshotsResponseInterface> {
    return this.http.get<GetGameScreenshotsResponseInterface>(url);
  }

  public getGameAchievements(
    gameId: number
  ): Observable<GetGameAchievementsResponseInterface> {
    return this.http.get<GetGameAchievementsResponseInterface>(
      `${API_BASE_URL}${API_GAMES_URL}/${gameId}/${API_GAME_ACHIEVEMENTS_URL}`
    );
  }

  public getGameSeries(gameId: number): Observable<GetGamesResponseInterface> {
    return this.http.get<GetGamesResponseInterface>(
      `${API_BASE_URL}${API_GAMES_URL}/${gameId}/${API_GAME_SERIES_URL}`
    );
  }

  public getGameAdditions(
    gameId: number
  ): Observable<GetGamesResponseInterface> {
    return this.http.get<GetGamesResponseInterface>(
      `${API_BASE_URL}${API_GAMES_URL}/${gameId}/${API_GAME_ADDITIONS_URL}`
    );
  }

  public getAdditionParentGames(
    gameId: number
  ): Observable<GetGamesResponseInterface> {
    return this.http.get<GetGamesResponseInterface>(
      `${API_BASE_URL}${API_GAMES_URL}/${gameId}/${API_ADDITION_PARENT_GAMES_URL}`
    );
  }
}
