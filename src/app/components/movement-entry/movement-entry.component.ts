import { Component } from '@angular/core';
import { Movement, MovementType } from '../../core/models/movement.model';
import { MovementService } from '../../core/services/movement.service';

@Component({
  selector: 'app-movement-entry',
  templateUrl: './movement-entry.component.html',
  styleUrl: './movement-entry.component.css',
})
export class MovementEntryComponent {
  entryMovement: Movement = {
    senderStoreCode: 'senderStore1',
    senderStoreName: '',
    destinationStoreName: '',
    customStatus: 'T1',
    referenceType: 'type1',
    reference: '',
    goodsDescription: '',
    quantity: 0,
    weight: 0,
    totalQuantity: 0,
    totalWeight: 0,
    type: MovementType.ENTREE,
    timestamp: new Date(),
  };

  constructor(private movementService: MovementService) {}

  onSubmit() {
    console.log(this.entryMovement);
    this.movementService.createNewMovement(this.entryMovement).subscribe(
      (response) => {
        console.log('Mouvement ajouté avec succès', response);
      },
      (error) => {
        console.error("Erreur lors de l'ajout du mouvement", error);
      }
    );
  }

  onCancel() {
    this.entryMovement = {
      senderStoreCode: '',
      senderStoreName: '',
      destinationStoreName: '',
      customStatus: '',
      referenceType: '',
      reference: '',
      goodsDescription: '',
      quantity: 0,
      weight: 0,
      totalQuantity: 0,
      totalWeight: 0,
      type: MovementType.ENTREE,
      timestamp: new Date(),
    };
  }
}
