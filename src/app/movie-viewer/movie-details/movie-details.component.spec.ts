import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-rating';
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

import { MovieDetailsComponent } from './movie-details.component';
import { MoviesService } from '../movies.service';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let moviesService: MoviesService;
    const testMovie = {
      id: 1,
      originalTitle: 'Movie 1',
      posterPath: '',
      overview: '',
      releaseDate: '',
      voteAverage: 0
    };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailsComponent ],
      imports: [ FormsModule, RatingModule, HttpModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        MoviesService,
        {
          provide: ActivatedRoute, useValue: {
            params: Observable.of({ id: '1' })
          }
        },
        { provide: Router, useValue: mockRouter},
        { provide: XHRBackend, useClass: MockBackend }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;

    moviesService = fixture.debugElement.injector.get(MoviesService);
    spyOn(moviesService, 'getMovie')
        .and.returnValue(testMovie);

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve ID from router parameters', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.ngOnInit();
    expect(component.id).toEqual(1);
  });

  it('should retrieve movie for retrieved movie ID', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.ngOnInit();
    expect(component.movie).toEqual(testMovie);
  });

  it('should have img element where poster will be loaded', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    component.ngOnInit();
    fixture.detectChanges();
    expect(compiled.querySelector('img')).toBeTruthy();
  }));

  it('should render \'rating\' component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    component.ngOnInit();
    fixture.detectChanges();
    expect(compiled.querySelector('rating')).toBeTruthy();
  }));
});
