import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Movie } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
    movie: Movie;
    id: number;
    subscription: Subscription;

    constructor(private moviesService: MoviesService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    console.info('ID', this.id);
                    this.movie = this.moviesService.getMovie(this.id);
                }
            );
        this.subscription = this.moviesService.moviesLoaded
            .subscribe(
                (movies: Movie[]) => {
                    this.movie = this.moviesService.getMovie(this.id);
                }
            );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
