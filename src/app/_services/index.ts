import { from } from 'rxjs';

export * from './webhooks.service';


//BusinessLogic

//_aaa_module

export * from './_aaa_module/authentication.service';
export * from './_aaa_module/role-permission.service';
export * from './_aaa_module/authentication.service';
export * from './_aaa_module/user.service';
export * from './_aaa_module/user-role-master.service';
export * from './_aaa_module/ProfileSetting.service';

export * from './_super_admin_module/form-and-table.service';
export * from './_super_admin_module/module-service.service';

//_cars
export * from './_businessLogic/_cars/car-brand.service';
export * from './_businessLogic/_cars/car-color.service';
export * from './_businessLogic/_cars/car-cylinder.service';
export * from './_businessLogic/_cars/car-variant.service';
export * from './_businessLogic/_cars/car-year-model.service';
export * from './_businessLogic/_cars/emirates.service';
export * from './_businessLogic/_cars/car-model.service';
export * from './_businessLogic/_cars/car-body-type.service';

// //_companyMaster
// export * from './_businessLogic/_companyMaster/company.service';
// export * from './_businessLogic/_companyMaster/vendor.service';
// export * from './_businessLogic/_companyMaster/asset-type-service.service';
// export * from './_businessLogic/_companyMaster/asset-type.service';
// export * from './_businessLogic/_companyMaster/asset.service';
// export * from './_businessLogic/_companyMaster/company-service.service';
// export * from './_businessLogic/_companyMaster/service.service';
// export * from './_businessLogic/_companyMaster/vendor-asset.service';
// export * from './_businessLogic/_companyMaster/vendor-service.service';

//_VehicleMaster

export * from './_businessLogic/_VehicleMaster/type-of-vehicles.service';
export * from './_businessLogic/_VehicleMaster/vehicle-details.service';

//_RecoveryTools

export * from './_businessLogic/_Tools/recovery-tools.service';

//vendor_module
 
export * from './_businessLogic/vendor_module/Vendor.service';
export * from './_businessLogic/vendor_module/vendor-ins.service';
export * from './_businessLogic/vendor_module/Employee.service';

//_ServiceMaster

export * from './_businessLogic/_ServiceMaster/service.service';

//_People
export * from './_businessLogic/_People/company.service';
export * from './_businessLogic/_People/staff.service';
export * from './_businessLogic/_People/CustomerList.service';
export * from './_businessLogic/_People/InsuranceVendorList.service';
export * from './_businessLogic/_People/RecoveryVendorList.service';
export * from './_businessLogic/_People/RecoveryDriverList.service';
export * from './_businessLogic/_People/RenewalDriverList.service';
export * from './_businessLogic/_People/RenewalVendorList.service';

//insurance_module
export * from './insurance_module/InsuranceRequest.service';

//recovery_module
export * from './car_revoery/CarRecovery.service';
export * from './car_revoery/CarRecoveryDistanceCost.service';
//_car_renewal_module
export * from './_car_renewal_module/car-renewal-distance-cost.service';
export * from './_car_renewal_module/car-renewal-office.service';
export * from './_car_renewal_module/car-renewal-order-status.service';
export * from './_car_renewal_module/car-renewal-status-type.service';
export * from './_car_renewal_module/car-renewal-order.service';
export * from './_car_renewal_module/car-renewal-emirates-based-cost.service';

//fine_module
export * from './fine_module/PayTrafficFine.service';
export * from './fine_module/ApplyForDiscount.service';
export * from './fine_module/InstallmentLimit.service';
export * from './fine_module/TrafficFineDiscountCharges.Service';