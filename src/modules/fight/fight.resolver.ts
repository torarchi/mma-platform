import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FightType } from './types/fight.type';
import { CreateFightInput } from './types/create-fight.input';
import { UpdateFightInput } from './types/update-fight.input';
import { FightService } from '../../application/services/fight.service';
import { FighterStatisticsService } from '../fighter-statistics/fighter-statistics.service';
import { v4 as uuid } from 'uuid';

@Resolver(() => FightType)
export class FightResolver {
  constructor(
    private readonly fightService: FightService,
    private readonly statisticsService: FighterStatisticsService,
  ) {}

  @Query(() => [FightType])
  async getAllFights() {
    return this.fightService.findAll();
  }

  @Query(() => FightType, { nullable: true })
  async getFight(@Args('id') id: string) {
    return this.fightService.findById(id);
  }

  @Mutation(() => FightType)
  async createFight(@Args('input') input: CreateFightInput) {
    const fight = await this.fightService.create({
      id: uuid(),
      ...input,
      createdAt: new Date(),
    });

    if (fight.winnerId) {
      const loserId = fight.fighter1Id === fight.winnerId
        ? fight.fighter2Id
        : fight.fighter1Id;
      await this.statisticsService.updateStatisticsAfterFight(
        fight.winnerId,
        loserId,
        fight.method,
      );
    } else if (fight.method === 'Draw' || fight.method === 'No Contest') {
      await this.statisticsService.updateStatisticsAfterFight(
        fight.fighter1Id,
        fight.fighter2Id,
        fight.method,
      );
    }

    return fight;
  }

  @Mutation(() => FightType)
  async updateFight(@Args('input') input: UpdateFightInput) {
    const { id, ...data } = input;
    return this.fightService.update(id, data);
  }

  @Mutation(() => Boolean)
  async deleteFight(@Args('id') id: string) {
    await this.fightService.delete(id);
    return true;
  }
}