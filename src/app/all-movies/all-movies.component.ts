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
  purchaseButton:boolean = true

  constructor(private moviesService : MoviesService) {

  this.movies = moviesService.getMovies()
    
  }

  
  ngOnInit() {
  }
  selectMovie(movie){
    this.selectedMovie = movie;
  }
  purchase(movie){
    this.moviesService.addToCollection(movie)
    this.moviesService.getUser()
  }

}
