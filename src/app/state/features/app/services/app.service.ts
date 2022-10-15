import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  API_BASE_URL,
  API_GAMES_URL,
} from '../../../../global/constants/api-constants';
import { GetGamesResponseInterface } from '../../games/types/get-games-response.interface';

@Injectable()
export class AppService {
  constructor(private readonly http: HttpClient) {}

  public getTotalGamesCount(): Observable<number> {
    return this.http
      .get<GetGamesResponseInterface>(API_BASE_URL + API_GAMES_URL)
      .pipe(
        map(
          (getGamesResponse: GetGamesResponseInterface) =>
            getGamesResponse.count
        )
      );
  }
}
