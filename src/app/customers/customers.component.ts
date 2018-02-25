import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import Customer from '../../models/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  private customersArray : Array<Customer>
  constructor(private dataService: DataService) {
    this.dataService.getCustomers().subscribe(customers => {this.customersArray=customers})
   }
  get customers (){
    console.log("test");
    return this.customersArray;
  }

  ngOnInit() {
  }

}
