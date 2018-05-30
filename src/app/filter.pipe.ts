import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './Movie';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(movies: Movie[], searchText: string): Movie[] {
    if(!movies) return [];
    if(!searchText) return movies;
searchText = searchText.toLowerCase();
return movies.filter( it => {
      return it.title.toLowerCase().includes(searchText);
    });
   }
}