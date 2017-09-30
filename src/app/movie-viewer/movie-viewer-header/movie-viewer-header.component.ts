import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-viewer-header',
  templateUrl: './movie-viewer-header.component.html',
  styleUrls: ['./movie-viewer-header.component.scss']
})
export class MovieViewerHeaderComponent {
    @Output()
    filterChanged: EventEmitter<string> = new EventEmitter<string>();
    filter: string;
    constructor(private router: Router) {}

    onFilterChange() {
        this.filterChanged.emit(this.filter);
        this.router.navigate(['/movies']);
    }
}
