import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { RootService } from '../../_helpers/root.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InstallmentLimitService {
  constructor(private http: HttpClient, public RootService: RootService, private router: Router,) { }

  public userData = [];
  private baseServiceUrl = '/installment-limit'

  getAll(e:any) {
    //return this.http.get<any[]>(`${environment.apiUrl+'/insurance-order'}?${e}`);
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
