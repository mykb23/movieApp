import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MoviesService } from './shared/movies.service';

@Injectable()
export class MovieResolver implements Resolve<any> {
  constructor(private movieService: MoviesService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.movieService.getMovie(route.params['id']);
  }
}
