import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  public changeDateFormat(date: string, format: string = 'LL'): string {
    return moment(date).format(format);
  }
}
