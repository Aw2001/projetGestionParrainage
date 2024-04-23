import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionParrainageComponent } from './evolution-parrainage.component';

describe('EvolutionParrainageComponent', () => {
  let component: EvolutionParrainageComponent;
  let fixture: ComponentFixture<EvolutionParrainageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolutionParrainageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvolutionParrainageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
