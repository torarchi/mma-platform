import { Field, ObjectType, ID } from '@nestjs/graphql';
import { WeightClass } from '../../../domain/value-objects/weight-class.enum';

@ObjectType()
export class RankingType {
  @Field(() => ID)
  id: string;

  @Field()
  fighterId: string;

  @Field(() => WeightClass)
  weightClass: WeightClass;

  @Field()
  rank: number;
}