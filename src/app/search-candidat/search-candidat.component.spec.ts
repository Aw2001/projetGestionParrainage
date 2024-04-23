import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCandidatComponent } from './search-candidat.component';

describe('SearchCandidatComponent', () => {
  let component: SearchCandidatComponent;
  let fixture: ComponentFixture<SearchCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
