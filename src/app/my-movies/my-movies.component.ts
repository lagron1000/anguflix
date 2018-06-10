import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MoviesService } from '../movies.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {
  
  movies = new Array<Movie>();
  removeController : boolean = false
  searchQuery : String

  constructor(private moviesService : MoviesService, private userService : UserService) { 
    this.searchQuery = this.moviesService.searchQuery
    this.movies = userService.getCollection()
  }

  ngOnInit() {
  }
  remove(movie){
    this.moviesService.removeFromCollection(movie)
  }

  toggleRemove(){
    this.removeController = !this.removeController
  }

}
