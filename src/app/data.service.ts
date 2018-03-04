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

  editCustomer(inputCustomer) {
    this.http.put<Customer>(`api/customers/${inputCustomer.id}`, {customer: inputCustomer}).subscribe( (responseCustomer) => {
      const idx = this.customers.findIndex(customer => responseCustomer.id === customer.id);
      this.customers[idx] = responseCustomer;
    });
  }

  deleteCustomer(customerId) {
    this.http.delete(`api/customers/${customerId}`).subscribe( () => {
      const idx = this.customers.findIndex(customer => customerId === customer.id);
      this.customers.splice(idx, 1);
    });
  }

  deleteCompany(companyId) {
    this.http.delete(`api/companies/${companyId}`).subscribe( () => {
      const idx = this.customers.findIndex(customer => companyId === customer.id);
      this.customers.splice(idx, 1);
    });
  }

  addCustomer(customer: Customer) {
    this.http.post<Customer>('api/customers', {customer: customer}).subscribe(resCustomer => this.customers.push(resCustomer));
  }

  addCompany(company: Customer) {
    this.http.post<Customer>('api/companies', {company: company}).subscribe(resCompany => this.customers.push(resCompany));
  }
}
