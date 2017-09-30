import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieViewerComponent } from './movie-viewer/movie-viewer.component';
import { MovieDetailsComponent } from './movie-viewer/movie-details/movie-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MovieViewerComponent, children: [
    { path: ':id', component: MovieDetailsComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
