import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { User } from '../../../_models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }

  public userData = [];
  private baseServiceUrl = '/driver'

  getAll(e: any) {
    return this.http.get<any[]>(`${environment.apiUrl + this.baseServiceUrl}?${e}`);
  }

  submitform(e: any) {
    var formData = new FormData();
    Object.keys(e).forEach(function(key) {
      if(key == 'licenseFileFront' || key == 'licenseFileFront'){
        if(e['licenseFileFront'])
          formData.append('licenseFileFront', e['licenseFileFront'])
        if(e['licenseFileBack'])
          formData.append('licenseFileBack', e['licenseFileBack'])
      }else{
        formData.append(key, e[key])  
      }
    })
    if (e['id']) {
      return this.http.put<any[]>(`${environment.apiUrl + this.baseServiceUrl}`, formData);
    }
    else {
      e['id'] = 0
      formData.append('id', e['id']);
      return this.http.post<any[]>(`${environment.apiUrl + this.baseServiceUrl}`, formData);
    }
  }

  delete(e: any) {
    return this.http.delete<any[]>(`${environment.apiUrl + this.baseServiceUrl}/` + e?.id);
  }

  deleteSelected(e: any) {
    return this.http.post<any[]>(`${environment.apiUrl + this.baseServiceUrl}` + '/delete-all', e);
  }

  ImportCSV(e: any) {
    return this.http.post<any[]>(`${environment.apiUrl + this.baseServiceUrl}` + '/add-all', e);
  }

  //custon functions
  // getVendorEmployeeService(e: any): Observable<any[]> {
  //   return this.http.get(`${environment.apiUrl}` + '/vendor-all-service/' + e.data.value)
  //     .pipe(
  //       map((res: any) => {
  //         e.formData[4].Options = res.results;
  //         //e.formData[6].Options = res.results;
  //         return e.formData;
  //       })
  //     );
  // }

   //custon functions
   getVendorVehicle(e: any): Observable<any[]> {
    return this.http.get(`${environment.apiUrl}` + '/vendor-vehicle-details/' + e.data.value)
      .pipe(
        map((res: any) => {
          e.formData[6].Options = res.results;
          //e.formData[6].Options = res.results;
          return e.formData;
        })
      );
  }

  // HideShowEmployeeVehile(e: any): Observable<any[]> {
  //   var serviceType = e.formData[4].Options.filter((element, index,array) => {
  //     return element.serviceId === e.data.value;
  //   })[0];
  //   console.log(serviceType.vehicleAvailability);
  //   if(serviceType.vehicleAvailability){
  //     e.formData[5].ForceDisabled = false
  //   }else{
  //     e.formData[5].ForceDisabled = true
  //   }
  //   return e.formData;
  // }
}
