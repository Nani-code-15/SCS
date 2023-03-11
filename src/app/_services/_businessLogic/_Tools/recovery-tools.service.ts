import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { User } from '../../../_models';

@Injectable({
  providedIn: 'root'
})
export class RecoveryToolsService {
  constructor(private http: HttpClient) { }

  public userData = [];
  private baseServiceUrl = '/recovery-tools'

  getAll(e:any) {
      return this.http.get<any[]>(`${environment.apiUrl+this.baseServiceUrl}?${e}`);
  }
  submitform(e:any){
      if(e['id']){
        return this.http.put<any[]>(`${environment.apiUrl+this.baseServiceUrl}`, e);
      }
      else{
        e['id'] = 0
        return this.http.post<any[]>(`${environment.apiUrl+this.baseServiceUrl}`, e);
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
}
