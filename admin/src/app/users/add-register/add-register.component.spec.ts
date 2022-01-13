import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegisterComponent } from './add-register.component';

describe('AddRegisterComponent', () => {
  let component: AddRegisterComponent;
  let fixture: ComponentFixture<AddRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
