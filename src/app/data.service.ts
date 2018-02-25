import { Injectable } from '@angular/core';
import Company from '../models/company';
import Customer from '../models/customer';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataService {
  customers: Customer[] = new Array();
  companies: Company[] = new Array();

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]>{
      return this.http.get<Company[]>('api/companies');
    }

    // const someCompany = new Company();
    // someCompany.name = 'some comapny';
    // someCompany.id = 1;
    // const someCompany2 = new Company();
    // someCompany2.name = 'other comapny';
    // someCompany2.id = 2;
    // return [someCompany, someCompany, someCompany2];


      getCustomers(): Observable<Customer[]>{
      console.log(this.http.get<Customer[]>('api/customers'));
      return this.http.get<Customer[]>('api/customers');
    }
    // const someCustomer = new Customer();
    // someCustomer.firstname = 'some customer first';
    // someCustomer.id = 1;
    // const someCustomer2 = new Customer();
    // someCustomer2.firstname = 'other guy';
    // someCustomer2.id = 2;
    // return [someCustomer, someCustomer, someCustomer2];
  
}
