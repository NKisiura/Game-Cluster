import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetDevelopersResponseInterface } from '../types/get-developers-response.interface';
import { API_BASE_URL } from '../../../../global/constants/api-constants';

@Injectable()
export class DevelopersService {
  constructor(private http: HttpClient) {}

  public getDevelopers(
    url: string
  ): Observable<GetDevelopersResponseInterface> {
    return this.http.get<GetDevelopersResponseInterface>(API_BASE_URL + url);
  }
}
