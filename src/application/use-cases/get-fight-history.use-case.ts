import { Injectable } from '@nestjs/common';
import { FightRepository } from '../../domain/repositories/fight.repository';

@Injectable()
export class GetFightHistoryUseCase {
  constructor(private readonly fightRepo: FightRepository) {}

  async execute(fighterId: string) {
    const fights = await this.fightRepo.findAll();
    return fights.filter(
      (f) => f.fighter1Id === fighterId || f.fighter2Id === fighterId,
    );
  }
}
