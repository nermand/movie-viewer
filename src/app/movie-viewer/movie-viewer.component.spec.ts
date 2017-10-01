import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MovieViewerComponent } from './movie-viewer.component';

describe('MovieViewerComponent', () => {
  let component: MovieViewerComponent;
  let fixture: ComponentFixture<MovieViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieViewerComponent
      ],
      imports: [
          RouterTestingModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-movie-viewer-header component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-movie-viewer-header')).toBeTruthy();
  });

  it('should render app-movie-list component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-movie-list')).toBeTruthy();
  });

  it('should render router-outlet', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  it('should set \'filter\' property when onSearch is triggered', () => {
    component.filter = '';
    const searchString = 'Search string';
    component.search(searchString);
    expect(component.filter).toEqual(searchString);
  });
});
