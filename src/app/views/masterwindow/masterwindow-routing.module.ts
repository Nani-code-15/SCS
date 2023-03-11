import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterwindowComponent } from './masterwindow.component';
import { RolepermissionComponent } from "../rolepermission/RolepermissionComponent";
import { SettingsComponent } from '../settings/settings.component';
import { InvoiceComponent } from '../invoice/invoice.component';
import { PayFineInvoiceComponent } from '../PayFineInvoice/PayFineInvoice.component';
import { ApplyForDiscountInvoiceComponent } from '../ApplyForDiscountInvoice/ApplyForDiscountInvoice.component';
const routes: Routes = [
  {
    path: '',
    component: MasterwindowComponent,
    data: {
      title: 'Master Window'
    }

  },
  {
    path: 'rolepermission',
    component:  RolepermissionComponent,
    data: {
      title: 'Master Window'
    }
  },
  {
    path: 'settings',
    component:  SettingsComponent,
    data: {
      title: 'Settings Window'
    }
  },
  {
    path: 'invoice',
    component:  InvoiceComponent,
    data: {
      title: 'Invoice Window'
    }
  },
  {
    path: 'PayFineInvoice',
    component:  PayFineInvoiceComponent,
    data: {
      title: 'Pay Traffic Invoice Window'
    }
  },
  {
    path: 'ApplyForDiscountInvoice',
    component:  ApplyForDiscountInvoiceComponent,
    data: {
      title: 'Apply For Discount Invoice Window'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterwindowRoutingModule { }
