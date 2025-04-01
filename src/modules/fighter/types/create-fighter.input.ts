import { InputType, Field, ID } from '@nestjs/graphql';
import { Gender } from '../../../domain/value-objects/gender.enum';
import { WeightClass } from '../../../domain/value-objects/weight-class.enum';

@InputType()
export class CreateFighterInput {
  @Field()
  fullName: string;

  @Field({ nullable: true })
  nickname?: string;

  @Field(() => Gender)
  gender: Gender;

  @Field(() => WeightClass)
  weightClass: WeightClass;

  @Field({ nullable: true })
  heightCm?: number;

  @Field({ nullable: true })
  nationality?: string;

  @Field({ nullable: true })
  team?: string;
}
