import { Field, ObjectType, registerEnumType, ID } from '@nestjs/graphql';
import { Gender } from '../../../domain/value-objects/gender.enum';
import { WeightClass } from '../../../domain/value-objects/weight-class.enum';

registerEnumType(Gender, { name: 'Gender' });
registerEnumType(WeightClass, { name: 'WeightClass' });

@ObjectType()
export class FighterType {
  @Field(() => ID)
  id: string;

  @Field()
  fullName: string;

  @Field({ nullable: true })
  nickname?: string;

  @Field(() => Gender)
  gender: Gender;

  @Field({ nullable: true })
  heightCm?: number;

  @Field(() => WeightClass)
  weightClass: WeightClass;

  @Field({ nullable: true })
  nationality?: string;

  @Field({ nullable: true })
  team?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
