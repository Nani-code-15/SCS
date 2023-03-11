import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, InjectionToken } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {EditorModule} from 'primeng/editor';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { SortablejsModule } from 'ngx-sortablejs';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { FallbackImgDirective} from './_helpers/fallback-img.directive';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { DatatableComponent } from './containers/datatable/datatable.component';
import {
  UserService,
  ModuleServiceService,
  FormAndTableService,
  RolePermissionService,
  UserRoleMasterService,
  ProfileSettingService,
  //_Cars
  CarBrandService,
  CarColorService,
  CarBodyTypeService,
  CarCylinderService,
  CarModelService,
  CarVariantService,
  CarYearModelService,
  EmiratesService,
  //_vehicleMaster
  TypeOfVehiclesService,
  VehicleDetailsService,
  //_Tool
  RecoveryToolsService,
  //_VendorMaster
  VendorInsService,
  VendorService,
  EmployeeService,
  //_ServiceMaster
  ServiceService,
  //_People
  CompanyService,
  StaffService,
  CustomerListService,
  InsuranceVendorListService,
  RenewalVendorListService,
  RecoveryVendorListService,
  RenewalDriverListService,
  RecoveryDriverListService,
  //insurance_module
  InsuranceRequestService,
  //_car_renewal_module
  CarRenewalDistanceCostService,
  CarRenewalOfficeService,
  CarRenewalOrderStatusService,
  CarRenewalStatusTypeService,
  CarRenewalOrderService,
  CarRenewalEmiratesBasedCostService,
  //fine_module
  PayTrafficFineService,
  ApplyForDiscountService,
  InstallmentLimitService,
  TrafficFineDiscountChargesService,
  //recovery_module
  CarRecoveryService,
  CarRecoveryDistanceCostService,

} from './_services';



const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';
import {FileUploadModule} from 'primeng/fileupload';
// import { EditComponent } from './edit/edit.component';






@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    ReactiveFormsModule,
    ButtonModule,
    ToggleButtonModule,
    EditorModule,
    InputNumberModule,
    SortablejsModule.forRoot({ animation: 150 }),
    FormsModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    IconModule,
    HttpClientModule,
    NgxFileDropModule,
    HttpClientModule, // <============ (Perform HTTP requests with this module)
    NgHttpLoaderModule.forRoot(),
    FileUploadModule,
    IconSetModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    DatatableComponent,
    FallbackImgDirective,
    // EditComponent,
  ],
  providers: [
    {provide: 'UserService', useExisting: UserService},
    {provide: 'FormAndTableService', useExisting: FormAndTableService},
    {provide: 'ModuleService', useExisting: ModuleServiceService},
    {provide: 'RolePermissionService', useExisting: RolePermissionService},
    {provide: 'UserRoleMasterService', useExisting: UserRoleMasterService},
    {provide: 'ProfileSettingService', useExisting: ProfileSettingService},

    {provide: 'CarBrandService', useExisting: CarBrandService},
    {provide: 'CarColorService', useExisting: CarColorService},
    {provide: 'CarBodyTypeService', useExisting: CarBodyTypeService},
    {provide: 'CarCylinderService', useExisting: CarCylinderService},
    {provide: 'CarModelService', useExisting: CarModelService},
    {provide: 'CarVariantService', useExisting: CarVariantService},
    {provide: 'CarYearModelService', useExisting: CarYearModelService},
    {provide: 'EmiratesService', useExisting: EmiratesService},
    {provide: 'TypeOfVehiclesService', useExisting: TypeOfVehiclesService},
    {provide: 'VehicleDetailsService', useExisting: VehicleDetailsService},
    {provide: 'RecoveryToolsService', useExisting: RecoveryToolsService},

    {provide: 'VendorService', useExisting: VendorService},
    {provide: 'VendorInsService', useExisting: VendorInsService},
    {provide: 'EmployeeService', useExisting: EmployeeService},
    {provide: 'ServiceService', useExisting: ServiceService},
    //people
    {provide: 'CompanyService', useExisting: CompanyService},
    {provide: 'StaffService', useExisting: StaffService},
    {provide: 'CustomerListService', useExisting: CustomerListService},
    {provide: 'InsuranceVendorListService', useExisting: InsuranceVendorListService},
    {provide: 'RenewalVendorListService', useExisting: RenewalVendorListService},
    {provide: 'RenewalDriverListService', useExisting: RenewalDriverListService},
    {provide: 'RecoveryDriverListService', useExisting: RecoveryDriverListService},
    {provide: 'RecoveryVendorListService', useExisting: RecoveryVendorListService},

    {provide: 'InsuranceRequestService', useExisting: InsuranceRequestService},
    {provide: 'CarRenewalDistanceCostService', useExisting: CarRenewalDistanceCostService},
    {provide: 'CarRenewalOfficeService', useExisting: CarRenewalOfficeService},
    {provide: 'CarRenewalOrderStatusService', useExisting: CarRenewalOrderStatusService},
    {provide: 'CarRenewalStatusTypeService', useExisting: CarRenewalStatusTypeService},
    {provide: 'CarRenewalOrderService', useExisting: CarRenewalOrderService},
    {provide: 'CarRenewalEmiratesBasedCostService', useExisting: CarRenewalEmiratesBasedCostService},
    //fine_module
    {provide: 'PayTrafficFineService', useExisting: PayTrafficFineService},
    {provide: 'ApplyForDiscountService', useExisting: ApplyForDiscountService},
    {provide: 'InstallmentLimitService', useExisting: InstallmentLimitService},
    {provide: 'TrafficFineDiscountChargesService', useExisting: TrafficFineDiscountChargesService},

    //recovery_module
    {provide: 'CarRecoveryService', useExisting: CarRecoveryService},
    {provide: 'CarRecoveryDistanceCostService', useExisting: CarRecoveryDistanceCostService},

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
