import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { MovieComponent } from './movie/movie.component';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FilterPipe }from './filter.pipe';
import { YearFilterPipe } from './yearFilter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { AppRoutingModule } from './app-routing-module';




@NgModule({
  declarations: [
    AppComponent,
    AllMoviesComponent,
    MyMoviesComponent,
    MovieComponent,
    HeaderComponent,
    FilterPipe,
    YearFilterPipe,
    MovieInfoComponent,
    
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [YearFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
