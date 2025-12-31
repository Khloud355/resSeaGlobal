import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatnershipComponent } from './patnership.component';

describe('PatnershipComponent', () => {
  let component: PatnershipComponent;
  let fixture: ComponentFixture<PatnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatnershipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
