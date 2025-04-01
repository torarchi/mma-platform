import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class FighterStatisticsType {
  @Field(() => ID)
  id: string;

  @Field()
  fighterId: string;

  @Field()
  wins: number;

  @Field()
  losses: number;

  @Field()
  draws: number;

  @Field()
  noContest: number;

  @Field()
  knockouts: number;

  @Field()
  submissions: number;

  @Field()
  updatedAt: Date;
}