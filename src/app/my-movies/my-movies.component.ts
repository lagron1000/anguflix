import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {
  
  movies = new Array<Movie>();
  removeController : boolean = false

  constructor(private moviesService : MoviesService) { 
    this.movies = moviesService.getCollection()
  }

  ngOnInit() {
  }
  remove(movie, i){
    this.moviesService.removeFromCollection(movie, i)
  }

  toggleRemove(){
    this.removeController = !this.removeController
  }

}
