import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomersComponent } from './customers/customers.component';
import { CompaniesComponent } from './companies/companies.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerRowComponent } from './customer-row/customer-row.component';
import { LoadingComponent } from './loading/loading.component';
import { MaterialImportsModule } from './material-import/material-import.module';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyRowComponent } from './company-row/company-row.component';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CompaniesComponent,
    AddCompanyComponent,
    AddCustomerComponent,
    CustomerDetailsComponent,
    CustomerRowComponent,
    LoadingComponent,
    CompanyDetailsComponent,
    CompanyRowComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
