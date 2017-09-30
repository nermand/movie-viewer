export class Movie {
    public id: number;
    public originalTitle: string;
    public overview: string;
    public releaseDate: string;
    public voteAverage: number;
    public posterPath: string;

    constructor(id: number, originalTitle: string, overview: string, releaseDate: string, voteAverage: number, posterPath: string, ) {
        this.id = id;
        this.originalTitle = originalTitle;
        this.overview = overview;
        this.releaseDate = releaseDate;
        this.voteAverage = voteAverage;
        this.posterPath = posterPath;
    }
}
