import { Fighter } from '../entities/fighter.entity';

export interface FighterRepository {
  findAll(): Promise<Fighter[]>;
  findById(id: string): Promise<Fighter | null>;
  create(fighter: Fighter): Promise<Fighter>;
  update(id: string, data: Partial<Fighter>): Promise<Fighter>;
  delete(id: string): Promise<void>;
}
