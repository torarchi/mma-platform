import { Injectable, Inject } from '@nestjs/common';
import { FightRepository } from '../../domain/repositories/fight.repository';
import { Fight } from '../../domain/entities/fight.entity';

@Injectable()
export class FightService {
  constructor(
    @Inject('FightRepository')
    private readonly fightRepo: FightRepository
  ) {}

  findAll(): Promise<Fight[]> {
    return this.fightRepo.findAll();
  }

  findById(id: string): Promise<Fight | null> {
    return this.fightRepo.findById(id);
  }

  async create(fight: Fight): Promise<Fight> {
    return this.fightRepo.create(fight);
  }

  async update(id: string, data: Partial<Fight>): Promise<Fight> {
    return this.fightRepo.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return this.fightRepo.delete(id);
  }
}
