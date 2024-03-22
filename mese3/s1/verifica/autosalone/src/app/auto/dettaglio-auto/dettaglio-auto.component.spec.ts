import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioAutoComponent } from './dettaglio-auto.component';

describe('DettaglioAutoComponent', () => {
  let component: DettaglioAutoComponent;
  let fixture: ComponentFixture<DettaglioAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DettaglioAutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DettaglioAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
