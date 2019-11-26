import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  MoviesListComponent,
  MovieListResolver,
  MovieDetailsComponent,
  MovieResolver
} from './movies/index';
// import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
// import { MovieResolver } from './movies/movie-resolver.service';
import { Error404Component } from './movies/errors/404.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesListComponent,
    resolve: { movies: MovieListResolver }
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
    resolve: { movie: MovieResolver }
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: 'movies', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
