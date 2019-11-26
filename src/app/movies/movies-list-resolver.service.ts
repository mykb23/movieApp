import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MoviesService } from './shared/movies.service';

@Injectable()
export class MovieListResolver implements Resolve<any> {
  constructor(private movieService: MoviesService) {}

  resolve() {
    return this.movieService.getDiscoverMovies();
  }
}
