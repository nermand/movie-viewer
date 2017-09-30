import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Movie } from './movie.model';

@Injectable()
export class MoviesService {
    private API_KEY = '4ff9d08260ed338797caa272d7df35dd';
    private POSTER_PATH = 'https://image.tmdb.org/t/p/w92';
    private movies: Movie[];

    moviesLoaded = new Subject<Movie[]>();

    constructor(private http: Http) {}

    getMovies() {
        return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&sort_by=popularity.desc`)
            .map(
                (response: Response) => {
                    const data = this.parseMovies(response.json());
                    this.movies = data;
                    this.moviesLoaded.next(this.movies);
                    console.info('Movies loaded');
                    return this.movies;
                }
            )
            .catch(
                (error: Response) => {
                    return Observable.throw('Something went wrong');
                }
            );
    }

    getMovie(id: number): Movie {
        if (!this.movies) {
            return;
        }
        return this.movies.find(
            (movie) => movie.id === id
        );
    }

    private parseMovies(moviesRaw: any): Movie[] {
        let movies: Movie[];

        if (!moviesRaw || moviesRaw.results.length === 0) {
            return movies;
        }

        movies = moviesRaw.results.map(
            (movieRaw) => {
                return new Movie(
                    movieRaw.id,
                    movieRaw.title,
                    movieRaw.overview,
                    movieRaw.release_date,
                    movieRaw.vote_average / 2,
                    this.POSTER_PATH + movieRaw.poster_path
                );
            }
        );

        return movies;
    }
}
