import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
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

import { MovieListComponent } from './movie-list.component';
import { FilterMoviesPipe } from '../movies-filter.pipe';
import { MoviesService } from '../movies.service';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListComponent, FilterMoviesPipe ],
      imports: [ RouterTestingModule, HttpModule ],
      providers: [
        { provide: Router, useValue: mockRouter},
        MoviesService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should table element where movies should be listed', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  });
});
