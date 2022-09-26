import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetGamesResponseInterface } from '../types/get-games-response.interface';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../../../global/constants/api-constants';

@Injectable()
export class GamesService {
  constructor(private http: HttpClient) {}

  public getGames(url: string): Observable<GetGamesResponseInterface> {
    return this.http.get<GetGamesResponseInterface>(API_BASE_URL + url);
  }

  public getGamesNextPage(url: string): Observable<GetGamesResponseInterface> {
    return this.http.get<GetGamesResponseInterface>(url);
  }
}
