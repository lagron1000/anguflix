import { Injectable } from '@angular/core';
import { Movie } from './Movie';
import { User } from './user';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  myMovies : Movie[] = new Array<Movie>()
  myUser : User = {budget: 30, movieCollection: this.myMovies};
  myMoviesSubject : Subject<Movie[]>
  myMoviesUpdated : Observable<Movie[]>
  

  constructor() {
    this.myMoviesSubject = new Subject<Movie[]>();
    this.myMoviesUpdated = this.myMoviesSubject.asObservable();
   }

  getCollection(){
    this.myMoviesSubject.next(this.myMovies)
    return this.myMovies
  }
  getUser(){
    return this.myUser
  }
}
