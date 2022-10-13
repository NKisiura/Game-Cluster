import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetGamesResponseInterface } from '../../games/types/get-games-response.interface';
import { API_BASE_URL } from '../../../../global/constants/api-constants';

@Injectable()
export class GameSearchService {
  constructor(private readonly http: HttpClient) {}

  public searchGames(url: string): Observable<GetGamesResponseInterface> {
    return this.http.get<GetGamesResponseInterface>(API_BASE_URL + url);
  }
}
