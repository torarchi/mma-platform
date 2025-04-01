import { Injectable } from '@nestjs/common';
import { RankingOrmEntity } from '../../infrastructure/database/typeorm/ranking.orm-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WeightClass } from '../../domain/value-objects/weight-class.enum';

@Injectable()
export class UpdateRankingsUseCase {
  constructor(
    @InjectRepository(RankingOrmEntity)
    private readonly rankingRepo: Repository<RankingOrmEntity>,
  ) {}

  async updateRanking(
    fighterId: string,
    weightClass: WeightClass,
    rank: number,
  ): Promise<void> {
    const existing = await this.rankingRepo.findOne({ where: { fighterId, weightClass } });

    if (existing) {
      existing.rank = rank;
      await this.rankingRepo.save(existing);
    } else {
      const newRanking = this.rankingRepo.create({
        fighterId,
        rank,
        weightClass,
      });
      await this.rankingRepo.save(newRanking);
    }
  }
}
