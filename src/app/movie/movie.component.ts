import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Movie } from '../Movie';

// var audio = new Audio('Wilhelm.mp3');

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {

  constructor() { }
  @Input() movie : Movie = new Movie
  @Input() purchase : Function
  ngOnInit() {
      // audio.play();
  }

  ngOnDestroy(){
    // audio.play();
  }
}
