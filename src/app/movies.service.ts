import { Injectable } from '@angular/core';
import { Movie } from './Movie';
import { User } from './user';

const MOVIES = [
  {id:0,img:"http://static.comicvine.com/uploads/original/10/104544/4068923-tarzan-wallpaper-walt-disneys-tarzan-6248938-1024-768.jpg",title:"Tarzan", price:3, year:1999, descrShort:"The movie is about the life of Tarzan. Tarzan was a small orphan who was raised by an ape named Kala since he was a child. He believed that this was his family, but on an expedition Jane Porter is rescued by Tarzan."},
  {id:1,img:"http://cdn.collider.com/wp-content/uploads/2016/04/the-lion-king-image.jpg",title:"The Lion King", year:1994,price:2, descrShort:"A young lion Prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days."},
  {id:2,img:"http://img.lum.dolimg.com/v1/images/characters_beautyandthebeast_belle_852af5fe.jpeg?region=0,0,1536,788&width=1200",price:3,title:"Beauty and the Beast", year:1991, descrShort:"A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love."},
  {id:3,img:"http://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2015/07/sword_in_the_stone_still.jpg",title:"The Sword in the Stone",price:6, year:1963, descrShort:"Arthur (aka Wart) is a young boy who aspires to be a knight's squire. On a hunting trip he falls in on Merlin, a powerful but amnesiac wizard who has plans for Wart beyond mere squiredom."},
  {id:4,img:"http://www.cgmeetup.net/forums/uploads/gallery/album_1392/med_gallery_646_1392_48130.jpg",title: "Beauty and the Beast", year: 2016,price:3, descrShort:"Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so I would think, given how breath-takingly pretty she is. I mean wow. Rumor has it she'll whip out a wand and turn Gaston into a toad."},
  {id:5,img:"https://images-na.ssl-images-amazon.com/images/I/71rpGtseYcL._SX355_.jpg",title: "Pulp Fiction", year: 1994,price:3, descrShort:"The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."}
]
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  myMovies : Movie[] = new Array<Movie>()
  myUser : User = {budget: 9};
  unBoughtMovies = MOVIES.concat();
  
  constructor() { }
  getMovies() : Array<Movie>{
    return this.unBoughtMovies
  }
  getMovie(i) : Movie{
    return this.unBoughtMovies[i]
  }
  getCollection(){
    return this.myMovies
  }
  getUser(){
    return this.myUser
  }
  addToCollection(movie : Movie):boolean{
    debugger
    if (this.myUser.budget - movie.price >= 0){
    this.myMovies.push(movie)
    this.myUser.budget -= movie.price
    let findIndex = (movie) => {
      for (let i = 0; i < this.unBoughtMovies.length; i++){
        if (this.unBoughtMovies[i].id === movie.id){
          return i
        }
      }
    }
    let index = findIndex(movie)
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
      for (let i = 0; i < this.myMovies.length; i++){
        if (this.myMovies[i].id === movie.id){
          return i
        }
      }
    }
    let index = findIndex(movie)
    // let i = this.myMovies.findIndex(movie);
    this.myMovies.splice(index, 1)
  }
}
