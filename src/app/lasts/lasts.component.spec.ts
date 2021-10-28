import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastsComponent } from './lasts.component';

describe('LastsComponent', () => {
  let component: LastsComponent;
  let fixture: ComponentFixture<LastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
