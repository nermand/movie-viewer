import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieViewerHeaderComponent } from './movie-viewer-header.component';

describe('MovieViewerHeaderComponent', () => {
  let component: MovieViewerHeaderComponent;
  let fixture: ComponentFixture<MovieViewerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieViewerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieViewerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
