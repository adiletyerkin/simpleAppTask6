import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSecondComponent } from './parent-second.component';

describe('ParentSecondComponent', () => {
  let component: ParentSecondComponent;
  let fixture: ComponentFixture<ParentSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
