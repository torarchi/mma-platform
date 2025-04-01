import { Injectable } from '@nestjs/common';
import { Fighter } from '../../domain/entities/fighter.entity';
import { FighterRepository } from '../../domain/repositories/fighter.repository';

@Injectable()
export class CreateFighterUseCase {
  constructor(private readonly fighterRepo: FighterRepository) {}

  async execute(data: Fighter): Promise<Fighter> {
    return this.fighterRepo.create(data);
  }
}
