import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../../../global/constants/api-constants';
import { GetPlatformsResponseInterface } from '../types/get-platforms-response.interface';
import { Observable } from 'rxjs';

@Injectable()
export class PlatformsService {
  constructor(private http: HttpClient) {}

  public getPlatforms(url: string): Observable<GetPlatformsResponseInterface> {
    return this.http.get<GetPlatformsResponseInterface>(API_BASE_URL + url);
  }
}
