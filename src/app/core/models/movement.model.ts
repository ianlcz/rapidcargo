export interface Movement {
  senderStoreCode: string;
  senderStoreName: string;
  destinationStoreName: string;
  customStatus: string;
  referenceType: string;
  reference: string;
  goodsDescription: string;
  quantity?: number;
  weight?: number;
  totalQuantity?: number;
  totalWeight?: number;
  type: MovementType;
  timestamp: Date;
}

export enum MovementType {
  ENTREE,
  SORTIE,
  CONS,
}
