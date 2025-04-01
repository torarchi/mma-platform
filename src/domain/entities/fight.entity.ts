import { FightMethod } from '../value-objects/fight-method.enum';

export interface Fight {
  id: string;
  eventId: string;
  fighter1Id: string;
  fighter2Id: string;
  winnerId?: string;
  method: FightMethod;
  round: number;
  time: string;
  createdAt: Date;
}
