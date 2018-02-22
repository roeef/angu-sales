import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  constructor(private dataService: DataService) { }
  get companies (){
    return this.dataService.getCompanies();
  }

  ngOnInit() {
  }

}
