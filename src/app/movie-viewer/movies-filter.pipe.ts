import { Pipe, PipeTransform } from '@angular/core';

import { Movie } from './movie.model';

@Pipe({ name: 'filterMovies' })
export class FilterMoviesPipe implements PipeTransform {
    transform(allMovies: Movie[], filter: string) {
        if (!allMovies || allMovies.length === 0 || !filter) {
            return allMovies;
        }

        return allMovies.filter(
            (movie) => movie.originalTitle.toLowerCase().indexOf(filter.toLowerCase()) !== -1
        );
    }
}
