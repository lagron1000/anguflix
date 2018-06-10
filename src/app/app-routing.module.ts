import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';

const routes: Routes = [
  { path: '', component: AllMoviesComponent},
  { path: 'movie-info/:_id', component: MovieInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
