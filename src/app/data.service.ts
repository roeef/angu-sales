import { Injectable } from '@angular/core';
import Company from '../models/company';
import Customer from '../models/customer';

@Injectable()
export class DataService {

  constructor() { }

  getCompanies(): Array<Company> {
    const someCompany = new Company();
    someCompany.name = 'some comapny';
    someCompany.id = 1;
    const someCompany2 = new Company();
    someCompany2.name = 'other comapny';
    someCompany2.id = 2;
    return [someCompany, someCompany, someCompany2];
  }

  getCustomers(): Array<Customer> {
    const someCustomer = new Customer();
    someCustomer.firstname = 'some customer first';
    someCustomer.id = 1;
    const someCustomer2 = new Customer();
    someCustomer2.firstname = 'other guy';
    someCustomer2.id = 2;
    return [someCustomer, someCustomer, someCustomer2];
  }
}
