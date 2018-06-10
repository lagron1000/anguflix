import { Component, OnInit } from '@angular/core';
import { Movie, Review } from '../Movie';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {
  movie : Movie
  addReviewController : Boolean
  myReview : Review = new Review()

  constructor(private moviesService : MoviesService, private userService : UserService, private route : ActivatedRoute, private router : Router) {
}

  ngOnInit() {
    this.getMovie()
  }
  getMovie(){
    this.route.params.subscribe(params => {
      return this.moviesService.getMovieInfo(params._id).subscribe((data)=>{
        this.movie = data
      })})
  }
  purchase(movie){
    this.router.navigate(['']);
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
  toggleAddReview(){
    this.addReviewController = !this.addReviewController
  }
  addReview(){
    if (this.myReview.name == "" || this.myReview.text == "" || !this.myReview.rating){
      alert('please fill the form before submiting!')
    } else {
    this.moviesService.addReview(this.movie._id, this.myReview).subscribe(()=>{
      debugger;
      this.getMovie()
      this.toggleAddReview()  
      this.myReview.name = ""
      this.myReview.text = ""
      this.myReview.rating  = undefined
    })
  }
    
    
  }

}
