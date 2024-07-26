import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementEntryComponent } from './movement-entry.component';

describe('MovementEntryComponent', () => {
  let component: MovementEntryComponent;
  let fixture: ComponentFixture<MovementEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovementEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovementEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
