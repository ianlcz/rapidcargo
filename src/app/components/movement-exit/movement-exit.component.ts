import { Component } from '@angular/core';
import { MovementType } from '../../core/enums/movement.enum';
import { ExitMovement } from '../../core/models/exitMovement.model';
import { MovementService } from '../../core/services/movement.service';

@Component({
  selector: 'app-movement-exit',
  templateUrl: './movement-exit.component.html',
  styleUrl: './movement-exit.component.css',
})
export class MovementExitComponent {
  exitMovement: ExitMovement = {
    senderStoreCode: '',
    senderStoreName: '',
    destinationStoreCode: 'destinationStore1',
    destinationStoreName: '',
    customStatus: 'T1',
    referenceType: 'type1',
    reference: '',
    clearanceType: 'T1',
    clearance: '',
    goodsDescription: '',
    quantity: 0,
    weight: 0,
    totalQuantity: 0,
    totalWeight: 0,
    type: MovementType.SORTIE,
    timestamp: new Date(),
  };

  constructor(private movementService: MovementService) {}

  onSubmit() {
    console.log(this.exitMovement);
    this.movementService.createMovement(this.exitMovement).subscribe(
      (response) => {
        console.log('Mouvement ajouté avec succès', response);
      },
      (error) => {
        console.error("Erreur lors de l'ajout du mouvement", error);
      }
    );
  }

  onCancel() {
    this.exitMovement = {
      senderStoreCode: '',
      senderStoreName: '',
      destinationStoreCode: '',
      destinationStoreName: '',
      customStatus: '',
      referenceType: '',
      reference: '',
      clearanceType: '',
      clearance: '',
      goodsDescription: '',
      quantity: 0,
      weight: 0,
      totalQuantity: 0,
      totalWeight: 0,
      type: MovementType.SORTIE,
      timestamp: new Date(),
    };
  }
}
