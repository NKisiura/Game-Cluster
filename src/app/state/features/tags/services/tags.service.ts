import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetTagsResponseInterface } from '../types/get-tags-response.interface';
import { API_BASE_URL } from '../../../../global/constants/api-constants';

@Injectable()
export class TagsService {
  constructor(private http: HttpClient) {}

  public getTags(url: string): Observable<GetTagsResponseInterface> {
    return this.http.get<GetTagsResponseInterface>(API_BASE_URL + url);
  }

  public getTagsNextPage(url: string): Observable<GetTagsResponseInterface> {
    return this.http.get<GetTagsResponseInterface>(url);
  }
}
