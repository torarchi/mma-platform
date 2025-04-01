import { Injectable } from '@nestjs/common';
import { FightRepository } from '../../domain/repositories/fight.repository';
import { Fight } from '../../domain/entities/fight.entity';

@Injectable()
export class FightService {
  constructor(private readonly fightRepo: FightRepository) {}

  findAll(): Promise<Fight[]> {
    return this.fightRepo.findAll();
  }

  findById(id: string): Promise<Fight | null> {
    return this.fightRepo.findById(id);
  }

  async create(fight: Fight): Promise<Fight> {
    return this.fightRepo.create(fight);
  }

  async delete(id: string): Promise<void> {
    return this.fightRepo.delete(id);
  }
}
