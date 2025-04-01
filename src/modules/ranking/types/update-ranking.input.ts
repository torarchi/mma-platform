import { InputType, Field } from '@nestjs/graphql';
import { WeightClass } from '../../../domain/value-objects/weight-class.enum';

@InputType()
export class UpdateRankingInput {
  @Field()
  fighterId: string;

  @Field(() => WeightClass)
  weightClass: WeightClass;

  @Field()
  rank: number;
}