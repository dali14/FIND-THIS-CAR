import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordForComponent } from './password-for.component';

describe('PasswordForComponent', () => {
  let component: PasswordForComponent;
  let fixture: ComponentFixture<PasswordForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
