import { Field, ObjectType, ID, registerEnumType } from '@nestjs/graphql';
import { FightMethod } from '../../../domain/value-objects/fight-method.enum';

registerEnumType(FightMethod, { name: 'FightMethod' });

@ObjectType()
export class FightType {
  @Field(() => ID)
  id: string;

  @Field()
  eventId: string;

  @Field()
  fighter1Id: string;

  @Field()
  fighter2Id: string;

  @Field({ nullable: true })
  winnerId?: string;

  @Field(() => FightMethod)
  method: FightMethod;

  @Field()
  round: number;

  @Field()
  time: string;

  @Field()
  createdAt: Date;
}