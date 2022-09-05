import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../../../global/constants/api-constants';
import { GameDetailsInterface } from '../../../../global/types/entities/games/game-details.interface';
import { Observable } from 'rxjs';

@Injectable()
export class GameDetailsService {
  constructor(private http: HttpClient) {}

  public getGameDetails(url: string): Observable<GameDetailsInterface> {
    return this.http.get<GameDetailsInterface>(API_BASE_URL + url);
  }
}
