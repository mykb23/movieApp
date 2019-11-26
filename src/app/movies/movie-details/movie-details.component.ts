import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie, MoviesService } from '../shared/index';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: IMovie;
  imgLink: any;
  img: any;
  srcImg: any;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.imgLink = this.movieService.imageUrl;
    this.getMovie();
  }

  getMovie() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe(movie => {
      this.movie = movie;
      this.img = this.movie.poster_path;
      this.srcImg = `${this.imgLink}/${this.img}`;
    });
  }

  back() {
    this.router.navigate(['/movies']);
  }
}
