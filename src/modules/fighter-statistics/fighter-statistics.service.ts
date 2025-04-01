import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FighterStatisticsOrmEntity } from '../../infrastructure/database/typeorm/fighter-statistics.orm-entity';
import { FightMethod } from '../../domain/value-objects/fight-method.enum';

@Injectable()
export class FighterStatisticsService {
  constructor(
    @InjectRepository(FighterStatisticsOrmEntity)
    private readonly statsRepo: Repository<FighterStatisticsOrmEntity>,
  ) {}

  async getStatisticsByFighterId(fighterId: string): Promise<FighterStatisticsOrmEntity | null> {
    return this.statsRepo.findOne({ where: { fighterId } });
  }

  async createStatistics(fighterId: string): Promise<FighterStatisticsOrmEntity> {
    const stats = this.statsRepo.create({
      fighterId,
      wins: 0,
      losses: 0,
      draws: 0,
      noContest: 0,
      knockouts: 0,
      submissions: 0,
    });
    return this.statsRepo.save(stats);
  }

  async updateStatisticsAfterFight(
    winnerId: string | null,
    loserId: string | null,
    method: FightMethod,
  ): Promise<void> {
    if (method === FightMethod.Draw) {
      if (winnerId) {
        await this.incrementDraws(winnerId);
      }
      if (loserId) {
        await this.incrementDraws(loserId);
      }
    } else if (method === FightMethod.NoContest) {
      if (winnerId) {
        await this.incrementNoContest(winnerId);
      }
      if (loserId) {
        await this.incrementNoContest(loserId);
      }
    } else {
      if (winnerId) {
        await this.incrementWins(winnerId, method);
      }
      if (loserId) {
        await this.incrementLosses(loserId);
      }
    }
  }

  private async incrementWins(fighterId: string, method: FightMethod): Promise<void> {
    const stats = await this.getOrCreateStatistics(fighterId);
    stats.wins += 1;

    if (method === FightMethod.KO) {
      stats.knockouts += 1;
    } else if (method === FightMethod.Submission) {
      stats.submissions += 1;
    }

    await this.statsRepo.save(stats);
  }

  private async incrementLosses(fighterId: string): Promise<void> {
    const stats = await this.getOrCreateStatistics(fighterId);
    stats.losses += 1;
    await this.statsRepo.save(stats);
  }

  private async incrementDraws(fighterId: string): Promise<void> {
    const stats = await this.getOrCreateStatistics(fighterId);
    stats.draws += 1;
    await this.statsRepo.save(stats);
  }

  private async incrementNoContest(fighterId: string): Promise<void> {
    const stats = await this.getOrCreateStatistics(fighterId);
    stats.noContest += 1;
    await this.statsRepo.save(stats);
  }

  private async getOrCreateStatistics(fighterId: string): Promise<FighterStatisticsOrmEntity> {
    let stats = await this.statsRepo.findOne({ where: { fighterId } });
    if (!stats) {
      stats = await this.createStatistics(fighterId);
    }
    return stats;
  }
}