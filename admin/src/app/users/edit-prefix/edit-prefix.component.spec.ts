import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrefixComponent } from './edit-prefix.component';

describe('EditPrefixComponent', () => {
  let component: EditPrefixComponent;
  let fixture: ComponentFixture<EditPrefixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPrefixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPrefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
