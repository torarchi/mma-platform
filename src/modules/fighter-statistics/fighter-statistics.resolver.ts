import { Resolver, Query, Args } from '@nestjs/graphql';
import { FighterStatisticsService } from './fighter-statistics.service';
import { FighterStatisticsType } from './types/fighter-statistics.type';

@Resolver(() => FighterStatisticsType)
export class FighterStatisticsResolver {
  constructor(private readonly statisticsService: FighterStatisticsService) {}

  @Query(() => FighterStatisticsType, { nullable: true })
  async getFighterStatistics(@Args('fighterId') fighterId: string) {
    return this.statisticsService.getStatisticsByFighterId(fighterId);
  }
}