import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private dataService: DataService) { }
  get customers (){
    return this.dataService.getCustomers();
  }

  ngOnInit() {
  }

}
