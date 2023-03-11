import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { User } from '../../../_models';

@Injectable({
  providedIn: 'root'
})
export class RenewalDriverListService {
  constructor(private http: HttpClient) { }

  public userData = [];
  private baseServiceUrl = '/renewal-driver-list'

  getAll(e:any) {
      return this.http.get<any[]>(`${environment.apiUrl+this.baseServiceUrl}?${e}`);
  }
  
}
