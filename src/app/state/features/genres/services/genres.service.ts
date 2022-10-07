import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetGenresResponseInterface } from '../types/get-genres-response.interface';
import { API_BASE_URL } from '../../../../global/constants/api-constants';

@Injectable()
export class GenresService {
  constructor(private readonly http: HttpClient) {}

  public getGenres(url: string): Observable<GetGenresResponseInterface> {
    return this.http.get<GetGenresResponseInterface>(API_BASE_URL + url);
  }

  public getGenresNextPage(
    url: string
  ): Observable<GetGenresResponseInterface> {
    return this.http.get<GetGenresResponseInterface>(url);
  }
}
