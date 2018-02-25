import { Injectable } from '@angular/core';
import Company from '../models/company';
import Customer from '../models/customer';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  customers: Customer[] = new Array();
  companies: Company[] = new Array();

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('api/companies').map(companies => {this.companies = companies; return companies; });
  }

  getCustomers(): Observable<Customer[]> {
    console.log(this.http.get<Customer[]>('api/customers'));
    return this.http.get<Customer[]>('api/customers').map(customers => {this.customers = customers; return customers; });
  }

  deleteCustomer(customerId): Observable<Customer[]> {
    const idx = this.customers.findIndex(customer => customerId === customer.id);
    this.customers.splice(idx, 1);
    // console.log(this.http.get<Customer[]>('api/customers'));
    // return this.http.get<Customer[]>('api/customers').map(customers => {this.customers = customers; return customers; });
    return null;
  }

  addCustomer(customer: Customer) {
    this.http.post<Customer>('api/customers', {customer: customer}).subscribe(resCustomer => this.customers.push(resCustomer));
  }

  addCcompany(company: Customer) {
    this.http.post<Customer>('api/companies', {company: company}).subscribe(resCompany => this.customers.push(resCompany));
  }

  // const someCustomer = new Customer();
  // someCustomer.firstname = 'some customer first';
  // someCustomer.id = 1;
  // const someCustomer2 = new Customer();
  // someCustomer2.firstname = 'other guy';
  // someCustomer2.id = 2;
  // return [someCustomer, someCustomer, someCustomer2];

}
