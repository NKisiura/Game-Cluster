import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetCreatorsResponseInterface } from '../types/get-creators-response.interface';
import { API_BASE_URL } from '../../../../global/constants/api-constants';

@Injectable()
export class CreatorsService {
  constructor(private readonly http: HttpClient) {}

  public getCreators(url: string): Observable<GetCreatorsResponseInterface> {
    return this.http.get<GetCreatorsResponseInterface>(API_BASE_URL + url);
  }

  public getCreatorsNextPage(
    url: string
  ): Observable<GetCreatorsResponseInterface> {
    return this.http.get<GetCreatorsResponseInterface>(url);
  }
}
