import { Component, OnInit, Input } from '@angular/core';

import { Dog } from '../dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-editor',
  templateUrl: './dog-editor.component.html',
  styleUrls: ['./dog-editor.component.css']
})
export class DogEditorComponent implements OnInit {
  @Input() dog: Dog = new Dog();
  constructor(private dogService: DogService) { }

  ngOnInit() {

  }

  isEditMode() {
    return this.dog.hasOwnProperty('id');
  }

  cancelEditMode() {
    this.dog = new Dog();
  }

  updateDog() {
    this.dogService.editDog(this.dog);
  }

  addDog() {
    this.dogService.addDog(this.dog);
    this.dog = new Dog();
  }

}
