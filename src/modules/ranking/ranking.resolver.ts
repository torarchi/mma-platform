import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RankingService } from './ranking.service';
import { RankingType } from './types/ranking.type';
import { UpdateRankingInput } from './types/update-ranking.input';
import { WeightClass } from '../../domain/value-objects/weight-class.enum';

@Resolver(() => RankingType)
export class RankingResolver {
  constructor(private readonly rankingService: RankingService) {}

  @Query(() => [RankingType])
  async getRankingsByWeightClass(@Args('weightClass', { type: () => WeightClass }) weightClass: WeightClass) {
    return this.rankingService.getRankingsByWeightClass(weightClass);
  }

  @Query(() => RankingType, { nullable: true })
  async getFighterRanking(
    @Args('fighterId') fighterId: string,
    @Args('weightClass', { type: () => WeightClass }) weightClass: WeightClass,
  ) {
    return this.rankingService.getFighterRanking(fighterId, weightClass);
  }

  @Mutation(() => RankingType)
  async updateRanking(@Args('input') input: UpdateRankingInput) {
    return this.rankingService.updateRanking(
      input.fighterId,
      input.weightClass,
      input.rank,
    );
  }

  @Mutation(() => Boolean)
  async deleteRanking(
    @Args('fighterId') fighterId: string,
    @Args('weightClass', { type: () => WeightClass }) weightClass: WeightClass,
  ) {
    return this.rankingService.deleteRanking(fighterId, weightClass);
  }
}