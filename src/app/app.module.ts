import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MiniMovieAppComponent } from './mini-movie-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import {
  MoviesListComponent,
  MoviesService,
  MovieListResolver,
  SlidesComponent,
  MovieDetailsComponent,
  MovieResolver
} from './movies/index';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MiniMovieAppComponent,
    MoviesListComponent,
    SlidesComponent,
    MovieDetailsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    HttpClientJsonpModule
  ],
  providers: [MoviesService, MovieListResolver, MovieResolver],
  bootstrap: [MiniMovieAppComponent]
})
export class AppModule {}
