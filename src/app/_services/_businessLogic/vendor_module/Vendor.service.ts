import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { User } from '../../../_models';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  constructor(private http: HttpClient) { }

  public userData = [];
  private baseServiceUrl = '/vendor'

  getAll(e:any) {
      return this.http.get<any[]>(`${environment.apiUrl+this.baseServiceUrl}?${e}`);
  }
  
  submitform(e:any){
    var formData = new FormData();
    Object.keys(e).forEach(function(key) {
      if(key == 'licenseFileFront' ||key == 'licenseFileBack' || key == 'registrationCertificateFileFront' || key == 'registrationCertificateFileBack'
      || key == 'emiratesIdFileFront' || key == 'emiratesIdFileBack'){
        if(e['licenseFileFront'])
          formData.append('licenseFileFront', e['licenseFileFront'])
        if(e['licenseFileBack'])
          formData.append('licenseFileBack', e['licenseFileBack'])
        if(e['registrationCertificateFileFront'])
          formData.append('registrationCertificateFileFront', e['registrationCertificateFileFront'])
        if(e['registrationCertificateFileBack'])
          formData.append('registrationCertificateFileBack', e['registrationCertificateFileBack'])
        if(e['emiratesIdFileFront'])
          formData.append('emiratesIdFileFront', e['emiratesIdFileFront'])
        if(e['emiratesIdFileBack'])
          formData.append('emiratesIdFileBack', e['emiratesIdFileBack'])
      }else{
        formData.append(key, e[key])
      }
    })
    
    if(e['id']){
      return this.http.put<any[]>(`${environment.apiUrl+this.baseServiceUrl}`, formData);
    }
    else{
      e['id'] = 0
      formData.append('id', e['id']);
      return this.http.post<any[]>(`${environment.apiUrl+this.baseServiceUrl}`, formData);
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
