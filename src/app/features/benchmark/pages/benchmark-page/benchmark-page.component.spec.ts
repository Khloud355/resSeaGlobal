import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkPageComponent } from './benchmark-page.component';

describe('BenchmarkPageComponent', () => {
  let component: BenchmarkPageComponent;
  let fixture: ComponentFixture<BenchmarkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenchmarkPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BenchmarkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
