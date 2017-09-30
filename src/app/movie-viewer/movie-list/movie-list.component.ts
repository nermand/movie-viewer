import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../movies.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
    movies: Movie[];

    constructor(private moviesService: MoviesService) { }

    ngOnInit() {
      this.moviesService.getMovies()
          .subscribe(
              (movies) => this.movies = movies,
              (error) => console.info('Error', error),
          );
    }
}
