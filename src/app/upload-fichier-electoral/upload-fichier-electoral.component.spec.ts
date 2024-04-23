import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFichierElectoralComponent } from './upload-fichier-electoral.component';

describe('UploadFichierElectoralComponent', () => {
  let component: UploadFichierElectoralComponent;
  let fixture: ComponentFixture<UploadFichierElectoralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFichierElectoralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadFichierElectoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
