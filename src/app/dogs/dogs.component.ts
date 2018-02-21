import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../dog';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs: Observable<Array<Dog>>;
  title: string;
  selectedDog: Dog = new Dog();
  constructor(private dogService: DogService) { }

  ngOnInit() {
    this.title = 'Our dogs';
    this.dogs = this.dogService.getDogs();
  }

  editDog(dog: Dog) {
    this.selectedDog = Object.assign({}, dog);
  }

  deleteDog(dog: Dog) {
    this.dogService.deleteDog(dog);
  }
}
