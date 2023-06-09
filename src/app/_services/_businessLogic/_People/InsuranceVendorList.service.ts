import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InsuranceVendorListService {
  constructor(private http: HttpClient) { }

  public userData = [];
  private baseServiceUrl = '/insurance-vendor-list'

  getAll(e:any) {
      return this.http.get<any[]>(`${environment.apiUrl+this.baseServiceUrl}?${e}`);
  }
  
}
