import { Component, OnInit, Input} from '@angular/core';
import Customer from '../../models/customer';

@Component({
  selector: 'app-customer-row',
  templateUrl: './customer-row.component.html',
  styleUrls: ['./customer-row.component.css']
})
export class CustomerRowComponent implements OnInit {

  constructor() { }
  @Input() index: number;
  @Input() customer: Customer;
  get keyArray() {
    return this.customer ? Object.keys(this.customer) : [];
  }

  ngOnInit() {
  }

}
