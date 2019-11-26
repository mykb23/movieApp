import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import movieData from '../../api/movies.json';

@Component({
  selector: 'app-root',
  template: `
    <app-navigation></app-navigation>
    <router-outlet></router-outlet>
  `
  // styleUrls: ['./app.component.css']
})
export class MiniMovieAppComponent {
  constructor() // private http: HttpClient
  {
    // console.log(this.movies);
  }

  ngOnInit() {
    // this.http.get('/assest/api/movies.json');
  }
}
