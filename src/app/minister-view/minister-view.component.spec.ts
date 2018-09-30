import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterViewComponent } from './minister-view.component';

describe('MinisterViewComponent', () => {
  let component: MinisterViewComponent;
  let fixture: ComponentFixture<MinisterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinisterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinisterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
