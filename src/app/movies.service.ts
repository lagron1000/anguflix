import { Injectable } from '@angular/core';
import { Movie, Review } from './Movie';
import { User } from './user';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Subject, Observer } from 'rxjs';
import { Observable } from 'rxjs';

const MOVIES = [
  {id:0,imgUrl:"http://static.comicvine.com/uploads/original/10/104544/4068923-tarzan-wallpaper-walt-disneys-tarzan-6248938-1024-768.jpg",title:"Tarzan", price:3, year:1999, shortDescription:"The movie is about the life of Tarzan. Tarzan was a small orphan who was raised by an ape named Kala since he was a child. He believed that this was his family, but on an expedition Jane Porter is rescued by Tarzan."},
  {id:1,imgUrl:"http://cdn.collider.com/wp-content/uploads/2016/04/the-lion-king-image.jpg",title:"The Lion King", year:1994,price:2, shortDescription:"A young lion Prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days."},
  {id:2,imgUrl:"http://img.lum.dolimg.com/v1/images/characters_beautyandthebeast_belle_852af5fe.jpeg?region=0,0,1536,788&width=1200",price:3,title:"Beauty and the Beast", year:1991, shortDescription:"A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love."},
  {id:3,imgUrl:"http://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2015/07/sword_in_the_stone_still.jpg",title:"The Sword in the Stone",price:6, year:1963, shortDescription:"Arthur (aka Wart) is a young boy who aspires to be a knight's squire. On a hunting trip he falls in on Merlin, a powerful but amnesiac wizard who has plans for Wart beyond mere squiredom."},
  {id:4,imgUrl:"http://www.cgmeetup.net/forums/uploads/gallery/album_1392/med_gallery_646_1392_48130.jpg",title: "Beauty and the Beast", year: 2016,price:3, shortDescription:"Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so I would think, given how breath-takingly pretty she is. I mean wow. Rumor has it she'll whip out a wand and turn Gaston into a toad."},
  {id:5,imgUrl:"https://images-na.ssl-images-amazon.com/images/I/71rpGtseYcL._SX355_.jpg",title: "Pulp Fiction", year: 1994,price:3, shortDescription:"The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."}
]
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  myMovies : Movie[]
  myUser : User
  unBoughtMovies : Array<Movie>
  searchSubject : Subject<string>
  searchUpdated : Observable<string>
  searchQuery: string = ""
  myMovieInfo : Movie
  moviesSubject : Subject<Movie[]> = new Subject()
  moviesObservable : Observable<Movie[]>
  movieSubject : Subject<Movie> = new Subject()
  movieObservable : Observable<Movie>
  // unBoughtMovies : Array<Movie> = MOVIES.concat();

  constructor(private userService : UserService, private http : HttpClient) { 
    this.myUser = userService.getUser();
    this.myMovies = userService.getCollection();
    this.searchSubject = new Subject<string>();
    this.searchUpdated = this.searchSubject.asObservable();
    this.moviesObservable = this.moviesSubject.asObservable()
    this.movieObservable = this.movieSubject.asObservable()
    this.getMovies();
  }
  getQuery(){
    this.searchSubject.next(this.searchQuery)
  }
  changeQuery(newQuery){
    debugger
    this.searchQuery = newQuery
  }
  getMovies() : void {
    if (this.searchQuery == ""){
    var observ =  this.http.get<Movie[]>('https://anguflix-api.herokuapp.com/api/movies');
    observ.subscribe((data)=>{
      this.unBoughtMovies = data;
      this.moviesSubject.next(this.unBoughtMovies)
    });
    // return observ;
  } else {
    var observ =  this.http.get<Movie[]>('https://anguflix-api.herokuapp.com/api/movies?title='+this.searchQuery);
    observ.subscribe((data)=>{
      this.unBoughtMovies = data;
      this.moviesSubject.next(this.unBoughtMovies)
    });
    // return observ;
  }
  }
  getMovieInfo(id){

    var infoObserve = this.http.get<Movie>('https://anguflix-api.herokuapp.com/api/movies/'+id)

    infoObserve.subscribe((data)=>{
      this.myMovieInfo = data
      this.movieSubject.next(this.myMovieInfo)
    })
  }
  addReview(id, newReview){
 var reviewObs = this.http.post<Object>('https://anguflix-api.herokuapp.com/api/movies/'+id+'/reviews', newReview)
 return reviewObs;
  }
  getMovie(i) : Movie{
    return this.unBoughtMovies[i]
  }

  addToCollection(movie : Movie):boolean{
    console.log(this.searchQuery)    
    if (this.userService.myUser.budget - movie.price >= 0){
    this.userService.myMovies.push(movie)
    this.userService.myUser.budget -= movie.price
    let findIndex = (movie) => {
      for (let i = 0; i < this.unBoughtMovies.length; i++){
        if (this.unBoughtMovies[i]._id === movie._id){
          return i
        }
      }
    }
    let index = findIndex(movie)
    debugger    
    this.unBoughtMovies.splice(index, 1)
    return true
    } else {
      alert('Insufficient funds!')
      return false
    }
  }
  removeFromCollection(movie){
    debugger
    this.myUser.budget += movie.price
    this.unBoughtMovies.push(movie)
    let findIndex = (movie) => {
      for (let i = 0; i < this.userService.myMovies.length; i++){
        if (this.userService.myMovies[i]._id === movie._id){
          return i
        }
      }
    }
    let index = findIndex(movie)
    this.userService.myMovies.splice(index, 1)
  }
}
