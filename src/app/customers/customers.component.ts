import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import Customer from '../../models/customer';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  private customersObserv: Observable<Array<Customer>>;
  filters: string;
  constructor(private dataService: DataService) {
    this.customersObserv = this.dataService.getCustomers();
  }
  get customers (){
    console.log('test');
    return this.customersObserv;
  }

  ngOnInit() {
  }

}
