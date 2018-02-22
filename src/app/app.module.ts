import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DogService } from './dog.service';

import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogEditorComponent } from './dog-editor/dog-editor.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomersComponent } from './customers/customers.component';
import { CompaniesComponent } from './companies/companies.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerRowComponent } from './customer-row/customer-row.component';
import { LoadingComponent } from './loading/loading.component';
<<<<<<< HEAD
import { MaterialImportsModule } from './material-import/material-import.module';
=======
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyRowComponent } from './company-row/company-row.component';
>>>>>>> 347de7810b1849af03b028351aad08379642b96f


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogEditorComponent,
    CustomersComponent,
    CompaniesComponent,
    AddCompanyComponent,
    AddCustomerComponent,
    CustomerDetailsComponent,
    CustomerRowComponent,
    LoadingComponent,
    CompanyDetailsComponent,
    CompanyRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
