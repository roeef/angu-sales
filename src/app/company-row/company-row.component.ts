import {Component, Input, OnInit} from '@angular/core';
import Customer from '../../models/customer';
import Company from '../../models/company';

@Component({
  selector: 'app-company-row',
  templateUrl: './company-row.component.html',
  styleUrls: ['./company-row.component.css']
})
export class CompanyRowComponent implements OnInit {

  constructor() { }

  @Input() index: number;
  @Input() company: Company;

  ngOnInit() {
  }

}
