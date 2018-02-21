import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Dog } from './dog';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';



const DOGS: Dog[] = [
  {id: 1, name: 'Rex', weight: 20, birthDate: new Date(2006, 2, 21)},
  {id: 2, name: 'Woof', weight: 8, birthDate: new Date(2011, 8, 12)},
  {id: 3, name: 'Chuck', weight: 28, birthDate: new Date(2015, 5, 6)},
  {id: 4, name: 'Barkley', weight: 4, birthDate: new Date(2012, 3, 15)},
  {id: 5, name: 'Prince', weight: 65, birthDate: new Date(2017, 5, 4)}
];

@Injectable()
export class DogService {
  dogs: Dog[] = [];
  httpGetObservable = this.http.get<Array<Dog>>('/api/dogs').map((source) => {this.dogs = source; return source; });
  // dogsObserver: Observer<Array<Dog>>;
  // dogsData: Observable<Array<Dog>> = new Observable<Array<Dog>>(observer => this.dogsObserver = observer);

  constructor(private http: HttpClient) {
  }

  getDogs(): any {
    return this.httpGetObservable;
  }

  addDog(newDog: Dog) {
    this.http.post<Dog>('/api/dogs', {dog: newDog}).subscribe(dog => {
      this.dogs.push(dog);
      // this.dogsObserver.next(this.dogs);
    });
  }



  editDog(inputDog: Dog) {
    this.http.put<Dog>(`/api/dogs/${inputDog.id}`, {dog: inputDog}).subscribe(responseDog => {
      const idx = this.dogs.findIndex(iDog => responseDog.id === iDog.id);
      this.dogs[idx] = responseDog;
    });
  }

  deleteDog(dogToDelete) {
    this.http.delete<Dog>(`/api/dogs/${dogToDelete.id}`).subscribe(() => {
        const idx = this.dogs.findIndex(iDog => dogToDelete.id === iDog.id);
        this.dogs.splice(idx, 1);
      }
    );
  }

  generateId (): number {
    return this.dogs[this.dogs.length - 1].id + 1;
  }
}
