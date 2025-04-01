import { Fight } from '../entities/fight.entity';

export interface FightRepository {
  findAll(): Promise<Fight[]>;
  findById(id: string): Promise<Fight | null>;
  create(fight: Fight): Promise<Fight>;
  delete(id: string): Promise<void>;
}
