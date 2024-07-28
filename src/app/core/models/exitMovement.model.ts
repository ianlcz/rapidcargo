import { Movement } from './movement.model';

export interface ExitMovement extends Movement {
  clearanceType: string;
  clearance: string;
}
