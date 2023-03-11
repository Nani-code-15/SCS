import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { RootService } from '../../_helpers/root.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplyForDiscountService {
  constructor(private http: HttpClient, public RootService: RootService, private router: Router,) { }

  public userData = [];
  private baseServiceUrl = '/apply-for-discount'

  getAll(e:any) {
    //return this.http.get<any[]>(`${environment.apiUrl+'/insurance-order'}?${e}`);
    return this.http.get<any[]>(`${environment.apiUrl+this.baseServiceUrl}?${e}`);
  }

  submitform(e:any){
    var formData = new FormData();
    Object.keys(e).forEach(function(key) {
      if(key == 'adminDocumentFile'){
        if(e['adminDocumentFile'])
          formData.append(key, e['adminDocumentFile'])
      }else{
        formData.append(key, e[key])
      }
    })
    if(e['id']){
      return this.http.put<any[]>(`${environment.apiUrl+this.baseServiceUrl}`, formData);
    }
  }

  delete(e:any){
      return this.http.delete<any[]>(`${environment.apiUrl+this.baseServiceUrl}/`+ e?.id);
  }
  viewinvoice(e:any){
    console.log(e);
    this.RootService.applyForDiscountData = e;
    this.router.navigate(['/masterwindow/ApplyForDiscountInvoice']);
  }

}
