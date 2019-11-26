import { Injectable } from '@angular/core';
import { IMovie } from './movie.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKey: string = '01fc9c73c9f5875c3af26294a52b6e96';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';
  private baseurl = 'http://localhost:3000/movies';

  imageUrl = 'http://image.tmdb.org/t/p/w185';

  constructor(private http: HttpClient) {}

  getDiscoverMovies(): Observable<IMovie[]> {
    return this.http
      .get(
        `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=en`
      )
      .pipe(map((data: any) => data.results))
      .pipe(catchError(this.handleError<IMovie[]>('getMovies', [])));
  }

  getMovie(id: number): Observable<IMovie> {
    // const url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}&language=en&append_to_response=videos`;
    return this.http
      .get<any>(
        `${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}&language=en&append_to_response=videos`
      )
      .pipe(map((data: IMovie) => data))
      .pipe(catchError(this.handleError<IMovie>(`getMovie id=${id}`)));
  }

  getSearch(query: string) {
    return this.http
      .get(
        `${this.urlMoviedb}/search/movie?api_key=${this.apiKey}&language=en&query=${query}`
      )
      .pipe(map((data: any) => data.results))
      .pipe(catchError(this.handleError<IMovie[]>(`getSearch query=${query}`)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
