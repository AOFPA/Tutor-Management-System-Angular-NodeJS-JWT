import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRegComponent } from './home-reg.component';

describe('HomeRegComponent', () => {
  let component: HomeRegComponent;
  let fixture: ComponentFixture<HomeRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
