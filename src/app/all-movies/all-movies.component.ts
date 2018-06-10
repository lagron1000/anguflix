import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../Movie';
import { UserService } from '../user.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {

  movies = new Array<Movie>();
  selectedMovie : Movie 
  purchaseButton:boolean = true
  searchQuery : string 

  constructor(private moviesService : MoviesService, private userService : UserService, private route : ActivatedRoute, private router : Router) {
    this.moviesService.searchSubject.subscribe((data)=>{ 
      this.searchQuery = data
    })

  }

  
  ngOnInit() {
//     this.movies = this.moviesService.unBoughtMovies
//     if (!this.movies){   
//     this.moviesService.getMovies().subscribe((data)=>{
//     this.movies = this.moviesService.unBoughtMovies
//   })
// }
this.moviesService.moviesObservable.subscribe((data)=>{
  this.movies = data
})
  }
  updateQuery(){
    this.moviesService.changeQuery(this.searchQuery.toLowerCase())
    this.moviesService.moviesSubject.subscribe((data)=>{
      this.movies = this.moviesService.unBoughtMovies
    })
  }
  
  selectMovie(movie){
    this.selectedMovie = movie;
  }
  purchase(movie){
    console.log(this.searchQuery)
    for (let i=0; i<this.userService.myMovies.length; i++){
      if (movie._id == this.userService.myMovies[i]._id){
        alert('Movie already in cart!')
        return
      } else {
        this.moviesService.addToCollection(movie)
        this.userService.getUser()
        return
      }
    }
    this.moviesService.addToCollection(movie)
    this.userService.getUser()
  }
  getInfo(movie){
    debugger
    // this.moviesService.getMovieInfo(movie._id)
    this.router.navigate(['/movie-info/'+movie._id]);
  }

}
 