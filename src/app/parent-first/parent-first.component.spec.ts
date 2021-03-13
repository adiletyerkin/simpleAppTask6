import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFirstComponent } from './parent-first.component';

describe('ParentFirstComponent', () => {
  let component: ParentFirstComponent;
  let fixture: ComponentFixture<ParentFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
