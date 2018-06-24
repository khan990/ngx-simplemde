import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSimpleMdeComponent } from './ngx-simple-mde.component';

describe('NgxSimpleMdeComponent', () => {
  let component: NgxSimpleMdeComponent;
  let fixture: ComponentFixture<NgxSimpleMdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSimpleMdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSimpleMdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
