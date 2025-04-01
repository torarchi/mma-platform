import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RankingOrmEntity } from '../../infrastructure/database/typeorm/ranking.orm-entity';
import { WeightClass } from '../../domain/value-objects/weight-class.enum';

@Injectable()
export class RankingService {
  constructor(
    @InjectRepository(RankingOrmEntity)
    private readonly rankingRepo: Repository<RankingOrmEntity>,
  ) {}

  async getRankingsByWeightClass(weightClass: WeightClass): Promise<RankingOrmEntity[]> {
    return this.rankingRepo.find({
      where: { weightClass },
      order: { rank: 'ASC' },
    });
  }

  async getFighterRanking(fighterId: string, weightClass: WeightClass): Promise<RankingOrmEntity | null> {
    return this.rankingRepo.findOne({
      where: { fighterId, weightClass },
    });
  }

  async updateRanking(fighterId: string, weightClass: WeightClass, rank: number): Promise<RankingOrmEntity> {
    const existing = await this.getFighterRanking(fighterId, weightClass);

    if (existing) {
      existing.rank = rank;
      return this.rankingRepo.save(existing);
    } else {
      const newRanking = this.rankingRepo.create({
        fighterId,
        weightClass,
        rank,
      });
      return this.rankingRepo.save(newRanking);
    }
  }

  async deleteRanking(fighterId: string, weightClass: WeightClass): Promise<boolean> {
    const result = await this.rankingRepo.delete({
      fighterId,
      weightClass,
    });
    return result.affected ? result.affected > 0 : false;
  }
}