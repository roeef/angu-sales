import { Component, OnInit } from '@angular/core';
import Customer from '../../models/customer';
import { DataService } from '../data.service';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private data: DataService) { }
  customer : Customer = new Customer();
  ngOnInit() {
  }
  addCustomer(){
    this.data.addCustomer(this.customer);
  }
}
