import { NgModule, InjectionToken, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormComponent } from '../../containers/form/form.component';
import { DatatableComponent } from '../../containers/datatable/datatable.component';
import {PrimengcompModule} from '../../primengcomp/primengcomp.module';
import {TreeModule} from 'primeng/tree';



@NgModule({
  declarations: [ 
    FormComponent,
    DatatableComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PrimengcompModule,
    TreeModule,
  ],
})
export class RolepermissionModule { }
