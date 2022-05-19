import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskedComponent } from './asked.component';

describe('AskedComponent', () => {
  let component: AskedComponent;
  let fixture: ComponentFixture<AskedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
