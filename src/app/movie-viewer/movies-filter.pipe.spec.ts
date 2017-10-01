import { FilterMoviesPipe } from './movies-filter.pipe';
import { Movie } from './movie.model';

describe('FilterMoviesPipe', () => {
  const pipe = new FilterMoviesPipe();
  const moviesMock: Movie[] = [
    { id: 1, originalTitle: 'Movie 1', posterPath: '', overview: '', releaseDate: '', voteAverage: 0 },
    { id: 2, originalTitle: 'Movie 2', posterPath: '', overview: '', releaseDate: '', voteAverage: 0 },
    { id: 3, originalTitle: 'Movie 3', posterPath: '', overview: '', releaseDate: '', voteAverage: 0 }
  ];

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter list to a single movie', () => {
    const result = pipe.transform(moviesMock, 'Movie 2');
    expect(result.length).toBe(1);
    expect(result[0].originalTitle).toEqual('Movie 2');
  });

  it('should return the whole set for empty search string', () => {
    const result = pipe.transform(moviesMock, '');
    expect(result.length).toBe(3);
  });

  it('should return an emtpy array for gibberish search string', () => {
    const result = pipe.transform(moviesMock, 'asdf');
    expect(result.length).toBe(0);
  });
});
