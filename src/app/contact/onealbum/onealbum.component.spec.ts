import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnealbumComponent } from './onealbum.component';

describe('OnealbumComponent', () => {
  let component: OnealbumComponent;
  let fixture: ComponentFixture<OnealbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnealbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnealbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
