import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../Movie';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {

  movies = new Array<Movie>();
  selectedMovie : Movie 

  constructor(private moviesService : MoviesService) {

  this.movies = moviesService.getMovies()
    
  }

  
  ngOnInit() {
  }
  selectMovie(movie){
    this.selectedMovie = movie;
  }
  purchase(movie, index){
    this.moviesService.addToCollection(movie, index)
    this.moviesService.getUser()
  }

}
