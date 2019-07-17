import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerFormComponent } from './buyer-form.component';

describe('BuyerFormComponent', () => {
  let component: BuyerFormComponent;
  let fixture: ComponentFixture<BuyerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
