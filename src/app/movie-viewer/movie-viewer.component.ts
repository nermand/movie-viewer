import { Component, OnInit } from '@angular/core';

import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movie-viewer',
  templateUrl: './movie-viewer.component.html',
  styleUrls: ['./movie-viewer.component.scss'],
  providers: [MoviesService]
})
export class MovieViewerComponent {
    filter: string;

    search($event) {
        this.filter = $event;
    }
}
