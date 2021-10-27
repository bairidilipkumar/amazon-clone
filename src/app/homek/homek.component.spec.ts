import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomekComponent } from './homek.component';

describe('HomekComponent', () => {
  let component: HomekComponent;
  let fixture: ComponentFixture<HomekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
