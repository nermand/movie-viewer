import { TestBed, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MoviesService } from './movies.service';
import { Movie } from './movie.model';

describe('MoviesService', () => {
  const moviesMock: Movie[] = [
    { id: 1, originalTitle: 'Movie 1', posterPath: '', overview: '', releaseDate: '', voteAverage: 0 },
    { id: 2, originalTitle: 'Movie 2', posterPath: '', overview: '', releaseDate: '', voteAverage: 0 },
    { id: 3, originalTitle: 'Movie 3', posterPath: '', overview: '', releaseDate: '', voteAverage: 0 }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MoviesService,
        { provide: XHRBackend, useClass: MockBackend }
      ],
      imports: [ HttpModule ]
    });
  });

  it('should be created', inject([MoviesService], (service: MoviesService) => {
    expect(service).toBeTruthy();
  }));

  describe('--> getMovies', () => {
      it('should return a list of movies', () => {

        inject([MoviesService, XHRBackend], (moviesService, mockBackend) => {

          const mockResponse = {
            data: moviesMock
          };

          mockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
              body: JSON.stringify(mockResponse)
            })));
          });

          moviesService.getMovies().subscribe((movies) => {
            expect(movies.length).toBe(3);
            expect(movies[0].originalTitle).toEqual('Movie 1');
            expect(movies[1].originalTitle).toEqual('Movie 2');
            expect(movies[2].originalTitle).toEqual('Movie 3');
          });
        });
      });
  });

  describe('--> getMovie', () => {
      it('should return a single movie for provided ID', () => {

        inject([MoviesService, XHRBackend], (moviesService, mockBackend) => {

          const mockResponse = {
            data: moviesMock
          };

          mockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
              body: JSON.stringify(mockResponse)
            })));
          });

          moviesService.getMovies().subscribe((movies) => {
            const movie = moviesService.getMovie(2);
            expect(movie).toBeTruthy();
            expect(movie.originalTitle).toEqual('Movie 2');
          });
        });
      });
  });
});
