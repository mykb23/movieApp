import { Component, OnInit } from '@angular/core';
import { MoviesService } from './shared/movies.service';
import { IMovie } from './shared/movie.model';

@Component({
  templateUrl: './movies-list.component.html',
  styles: [
    `
      .jumbotron {
        background: transparent !important;
        vertical-align: center;
      }
      .card {
        background: transparent !important;
        // color: white;
        // text-align: center;
        cursor: pointer;
      }
    `
  ]
})
export class MoviesListComponent implements OnInit {
  movies: IMovie[];
  searchMoviesResult: IMovie[];

  constructor(private movieService: MoviesService) {}
  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getDiscoverMovies().subscribe(results => {
      this.movies = results;
      // console.log(this.movies);
    });
  }

  searchMovies(search: string) {
    this.movieService.getSearch(search).subscribe(result => {
      this.searchMoviesResult = result;
    });
  }
}
