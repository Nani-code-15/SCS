import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CarRenewalOrderService {
  constructor(private http: HttpClient) { }

  public userData = [];
  private baseServiceUrl = '/car-renewal-order'

  getAll(e:any) {
      return this.http.get<any[]>(`${environment.apiUrl+this.baseServiceUrl}?${e}`);
  }
  submitform(e:any){
      if(e['id']){
        return this.http.put<any[]>(`${environment.apiUrl+this.baseServiceUrl}`, e);
      }
      
  }

  delete(e:any){
      return this.http.delete<any[]>(`${environment.apiUrl+this.baseServiceUrl}/`+ e?.id);
  }

  deleteSelected(e:any){
    return this.http.post<any[]>(`${environment.apiUrl+this.baseServiceUrl}`+'/delete-all', e);
  }

  ImportCSV(e:any){
    return this.http.post<any[]>(`${environment.apiUrl+this.baseServiceUrl}`+'/add-all', e);
  }

  getVendorDriver(e: any): Observable<any[]> {
    return this.http.get(`${environment.apiUrl}` + '/renewal-driver/' + e.data.value)
      .pipe(
        map((res: any) => {
          e.formData[5].Options = res.results;
          //e.formData[6].Options = res.results;
          return e.formData;
        })
      );
  }

}
