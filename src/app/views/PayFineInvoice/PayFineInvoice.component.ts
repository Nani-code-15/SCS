import { Component, OnInit } from '@angular/core';
import {RootService} from '../../_helpers/root.service';
import {Location} from '@angular/common';

import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { CompileShallowModuleMetadata } from '@angular/compiler';


@Component({
  selector: 'app-PayFineInvoice',
  templateUrl: './PayFineInvoice.component.html',
  styleUrls: ['./PayFineInvoice.component.scss']
})
export class PayFineInvoiceComponent implements OnInit {

  constructor(public RootService: RootService, private _location: Location) { }

  ngOnInit(): void {
    if(this.RootService.payFineData.length  == 0){
      this._location.back();
    }
    console.log(this.RootService.payFineData)
  }

  download(){
    html2canvas(document.querySelector("#parentdiv")).then(canvas => {

        var pdf = new jspdf('p', 'mm', [canvas.width, canvas.height]);

        var imgData  = canvas.toDataURL("image/jpeg", 1.0);
        pdf.addImage(imgData,0,0,canvas.width, canvas.height);
        pdf.save('PayFineInvoice.pdf');

    });

  }

  openURl(val:any){
    //console.log(val);
    if(val == null || val == ''){
      return false;
    }
    window.open(val, "_blank")
  }

}
