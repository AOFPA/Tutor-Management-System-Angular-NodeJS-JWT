import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePrefixComponent } from './delete-prefix.component';

describe('DeletePrefixComponent', () => {
  let component: DeletePrefixComponent;
  let fixture: ComponentFixture<DeletePrefixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePrefixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePrefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
