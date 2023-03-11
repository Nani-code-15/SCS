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
export class PayTrafficFineService {
  constructor(private http: HttpClient, public RootService: RootService, private router: Router,) { }

  public userData = [];
  private baseServiceUrl = '/pay-traffic-fine'

  getAll(e:any) {
    //return this.http.get<any[]>(`${environment.apiUrl+'/insurance-order'}?${e}`);
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

  getAllCalculation(e: any): Observable<any[]> {
    //var val = document.getElementById("fineAmountId").value;
    var val = (<HTMLInputElement>document.getElementById("fineAmountId")).value
    return this.http.get(`${environment.apiUrl}` + '/pay-traffic-fine/get-calculation/' + val)
      .pipe(
        map((res: any) => {
          //
          (<HTMLInputElement>document.getElementById("deductionAmountId")).value =res.results['deductionAmount'];
          (<HTMLInputElement>document.getElementById("payableFineId")).value =res.results['payableFine'];
          (<HTMLInputElement>document.getElementById("remainingFineId")).value =res.results['remainingFine'];
          (<HTMLInputElement>document.getElementById("serviceChargeId")).value =res.results['serviceCharge'];
          (<HTMLInputElement>document.getElementById("processingFeeId")).value =res.results['processingFee'];
          (<HTMLInputElement>document.getElementById("vatTaxId")).value =res.results['vatTax'];
          (<HTMLInputElement>document.getElementById("netProfitId")).value =res.results['netProfit'];
          (<HTMLInputElement>document.getElementById("spotiiUseAmountId")).value =res.results['spotiiUseAmount'];
          // (<HTMLInputElement>document.getElementById("spotiiVoucherCodeId")).value =res.results['spotiiVoucherCode'];
          (<HTMLInputElement>document.getElementById("tabbyUseAmountId")).value =res.results['tabbyUseAmount'];
          // (<HTMLInputElement>document.getElementById("tabbyVoucherCodeId")).value =res.results['tabbyVoucherCode'];
          (<HTMLInputElement>document.getElementById("tamaraUseAmountId")).value =res.results['tamaraUseAmount'];
          // (<HTMLInputElement>document.getElementById("tamaraVoucherCodeId")).value =res.results['tamaraVoucherCode'];
          (<HTMLInputElement>document.getElementById("spotiiInstalmentTypeId")).value =res.results['spotiiInstalmentType'];
          (<HTMLInputElement>document.getElementById("spotiiCostPerMonthId")).value =res.results['spotiiCostPerMonth'];
          (<HTMLInputElement>document.getElementById("tabbyInstalmentTypeId")).value =res.results['tabbyInstalmentType'];
          (<HTMLInputElement>document.getElementById("tabbyCostPerMonthId")).value =res.results['tabbyCostPerMonth'];
          (<HTMLInputElement>document.getElementById("tamaraInstalmentTypeId")).value =res.results['tamaraInstalmentType'];
          (<HTMLInputElement>document.getElementById("tamaraCostPerMonthId")).value =res.results['tamaraCostPerMonth'];
          


          //console.log(res.results);
          //e.formData[1].payableFine = res.results['payableFine'];
          //e.formData[6].Options = res.results;
          return e.formData;
        })
      );
  }

  CalculateSpottiAmount(e:any){
    let alcAmount = parseInt((<HTMLInputElement>document.getElementById("spotiiUseAmountId")).value);
    let type = parseInt((<HTMLInputElement>document.getElementById("spotiiInstalmentTypeId")).value);
    (<HTMLInputElement>document.getElementById("spotiiCostPerMonthId")).value =(alcAmount/type).toString();
  }
  CalculateTabbyAmount(e:any){
    let alcAmount = parseInt((<HTMLInputElement>document.getElementById("tabbyUseAmountId")).value);
    let type = parseInt((<HTMLInputElement>document.getElementById("tabbyInstalmentTypeId")).value);
    (<HTMLInputElement>document.getElementById("tabbyCostPerMonthId")).value =(alcAmount/type).toString();
  }
  CalculateTamaraAmount(e:any){
    let alcAmount = parseInt((<HTMLInputElement>document.getElementById("tamaraUseAmountId")).value);
    let type = parseInt((<HTMLInputElement>document.getElementById("tamaraInstalmentTypeId")).value);
    (<HTMLInputElement>document.getElementById("tamaraCostPerMonthId")).value =(alcAmount/type).toString();
  }

  viewinvoice(e:any){
    console.log(e);
    this.RootService.payFineData = e;
    this.router.navigate(['/masterwindow/PayFineInvoice']);
  }
}
