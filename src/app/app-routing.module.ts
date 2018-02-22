import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {CompaniesComponent} from './companies/companies.component';
import {CompanyDetailsComponent} from './company-details/company-details.component';
import {AddCompanyComponent} from './add-company/add-company.component';


const routes: Routes = [
  { path: '', component: CustomersComponent},
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'customer/:id', component: CustomerDetailsComponent},
  { path: 'companies', component: CompaniesComponent },
  { path: 'add-company', component: AddCompanyComponent},
  { path: 'company/:id', component: CompanyDetailsComponent},
  { path: 'companies', component: CompaniesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
