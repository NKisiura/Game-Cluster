import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetStoresResponseInterface } from '../types/get-stores-response.interface';
import { API_BASE_URL } from '../../../../global/constants/api-constants';

@Injectable()
export class StoresService {
  constructor(private http: HttpClient) {}

  public getStores(url: string): Observable<GetStoresResponseInterface> {
    return this.http.get<GetStoresResponseInterface>(API_BASE_URL + url);
  }
}
