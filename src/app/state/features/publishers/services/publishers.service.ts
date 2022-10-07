import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetPublishersResponseInterface } from '../types/get-publishers-response.interface';
import { API_BASE_URL } from '../../../../global/constants/api-constants';

@Injectable()
export class PublishersService {
  constructor(private readonly http: HttpClient) {}

  public getPublishers(
    url: string
  ): Observable<GetPublishersResponseInterface> {
    return this.http.get<GetPublishersResponseInterface>(API_BASE_URL + url);
  }

  public getPublishersNextPage(
    url: string
  ): Observable<GetPublishersResponseInterface> {
    return this.http.get<GetPublishersResponseInterface>(url);
  }
}
