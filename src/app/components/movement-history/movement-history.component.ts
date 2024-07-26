import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Movement } from '../../core/models/movement.model';
import { MovementService } from '../../core/services/movement.service';

@Component({
  selector: 'app-movement-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movement-history.component.html',
  styleUrl: './movement-history.component.css',
})
export class MovementHistoryComponent {
  movements: Movement[] = [];

  constructor(private movementService: MovementService) {}

  ngOnInit() {
    this.movementService.getMovements().subscribe((data: Movement[]) => {
      this.movements = data;
    });
  }
}
