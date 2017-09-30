import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RatingModule } from 'ngx-rating';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-viewer/movie-list/movie-list.component';
import { MovieViewerComponent } from './movie-viewer/movie-viewer.component';
import { MovieDetailsComponent } from './movie-viewer/movie-details/movie-details.component';
import { MovieViewerHeaderComponent } from './movie-viewer/movie-viewer-header/movie-viewer-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieViewerComponent,
    MovieDetailsComponent,
    MovieViewerHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
