import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Movie } from '../Movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() removeController
  @Input() purchaseButton
  @Input() movie : Movie = new Movie
  @Output() moviePurchased : EventEmitter<Movie> = new EventEmitter();
  @Output() movieRemoved : EventEmitter<Movie> = new EventEmitter();
  @Output() movieGot : EventEmitter<Movie> = new EventEmitter();

  constructor() { }

  
  ngOnInit() {

  }

  buy() {
    this.moviePurchased.emit(this.movie);
  }

  remove(){
    this.movieRemoved.emit(this.movie)
  }
  getMovie(){
    this.movieGot.emit(this.movie)
  }
}
