import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './Movie';
@Pipe({
  name: 'yearFilter',
  pure: false
})
export class YearFilterPipe implements PipeTransform {
  transform(movies: Movie[], searchNum: number): Movie[] {
    if(!movies) return [];
    if(!searchNum) return movies;
// searchNum = searchNum.toLowerCase();
return movies.filter( it => {
    debugger
    console.log(it.year)
    console.log(searchNum)
    if (it.year == searchNum){
        return it
    }
    //   return it.year.valueOf
    });
   }
}