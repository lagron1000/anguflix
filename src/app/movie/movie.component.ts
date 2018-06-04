import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Movie } from '../Movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() purchaseButton
  @Input() movie : Movie = new Movie
  @Output() moviePurchased : EventEmitter<Movie> = new EventEmitter();

  constructor() { }

  
  ngOnInit() {

  }

  buy() {
    this.moviePurchased.emit(this.movie);
  }
}
