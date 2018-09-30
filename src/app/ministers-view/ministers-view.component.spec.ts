import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistersViewComponent } from './ministers-view.component';

describe('MinistersViewComponent', () => {
  let component: MinistersViewComponent;
  let fixture: ComponentFixture<MinistersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
