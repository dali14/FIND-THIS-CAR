import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteInfoComponent } from './compte-info.component';

describe('CompteInfoComponent', () => {
  let component: CompteInfoComponent;
  let fixture: ComponentFixture<CompteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
