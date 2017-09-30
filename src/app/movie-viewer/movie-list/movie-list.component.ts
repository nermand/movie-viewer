import { Component, OnInit, Input } from '@angular/core';

import { MoviesService } from '../movies.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
    movies: Movie[];
    @Input() filter: string;

    constructor(private moviesService: MoviesService) { }

    ngOnInit() {
      this.moviesService.getMovies()
          .subscribe(
              (movies) => this.movies = movies,
              (error) => {
                  console.error('Error occurred while obtaining movie list', error);
              },
          );
    }
}
