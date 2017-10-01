import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { MovieViewerHeaderComponent } from './movie-viewer-header.component';

describe('MovieViewerHeaderComponent', () => {
  let component: MovieViewerHeaderComponent;
  let fixture: ComponentFixture<MovieViewerHeaderComponent>;
  let searchInputEl: DebugElement;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieViewerHeaderComponent ],
      imports: [ FormsModule ],
      providers: [
        { provide: Router, useValue: mockRouter},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieViewerHeaderComponent);
    component = fixture.componentInstance;
    searchInputEl = fixture.debugElement.query(By.css('input'));
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render \'h1\' with content \'Movie viewer\'', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Movie viewer');
  });

  it('should render \'h1\' with link pointing to \'/movies\'', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').getAttribute('routerLink')).toContain('/movies');
  });

  it('should render \'input\' with placeholder \'Search...\'', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').getAttribute('placeholder')).toContain('Search...');
  });

  it('should emit on \'filterChanged\' property when search value is modified', async(() => {
    component.filterChanged.subscribe((x) => component.filter = 'some value');
    searchInputEl.triggerEventHandler('change', null);
    component.onFilterChange();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.filter).toEqual('some value');
    });
  }));

  it('should navigate to \'movies\' when onFilterChange is called', () => {
    component.onFilterChange();
    expect(mockRouter.navigate).toHaveBeenCalledWith (['/movies']);
  });
});
