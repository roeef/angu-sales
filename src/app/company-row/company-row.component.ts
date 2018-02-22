import {Component, Input, OnInit} from '@angular/core';
import Company from '../../models/company';

@Component({
  selector: 'app-company-row',
  templateUrl: './company-row.component.html',
  styleUrls: ['./company-row.component.css']
})
export class CompanyRowComponent implements OnInit {
  @Input() index: number;

  @Input() company: Company;
  constructor() {
  }
  get keyArray() {
    return this.company ? Object.keys(this.company) : [];
  }

  ngOnInit() {
  }

}
