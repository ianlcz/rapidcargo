import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementExitComponent } from './movement-exit.component';

describe('MovementExitComponent', () => {
  let component: MovementExitComponent;
  let fixture: ComponentFixture<MovementExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovementExitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovementExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
