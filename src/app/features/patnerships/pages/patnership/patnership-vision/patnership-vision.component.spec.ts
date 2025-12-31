import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatnershipVisionComponent } from './patnership-vision.component';

describe('PatnershipVisionComponent', () => {
  let component: PatnershipVisionComponent;
  let fixture: ComponentFixture<PatnershipVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatnershipVisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatnershipVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
