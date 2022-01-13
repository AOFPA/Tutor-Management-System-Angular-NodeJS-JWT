import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrefixComponent } from './list-prefix.component';

describe('ListPrefixComponent', () => {
  let component: ListPrefixComponent;
  let fixture: ComponentFixture<ListPrefixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPrefixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
