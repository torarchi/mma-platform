import { Injectable } from '@nestjs/common';
import { FighterRepository } from '../../domain/repositories/fighter.repository';
import { Fighter } from '../../domain/entities/fighter.entity';

@Injectable()
export class FighterService {
  constructor(private readonly fighterRepo: FighterRepository) {}

  findAll(): Promise<Fighter[]> {
    return this.fighterRepo.findAll();
  }

  findById(id: string): Promise<Fighter | null> {
    return this.fighterRepo.findById(id);
  }

  async create(fighter: Fighter): Promise<Fighter> {
    return this.fighterRepo.create(fighter);
  }

  async update(id: string, data: Partial<Fighter>): Promise<Fighter> {
    return this.fighterRepo.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return this.fighterRepo.delete(id);
  }
}
