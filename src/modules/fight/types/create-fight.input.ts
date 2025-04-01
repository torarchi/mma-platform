import { InputType, Field, ID } from '@nestjs/graphql';
import { FightMethod } from '../../../domain/value-objects/fight-method.enum';

@InputType()
export class CreateFightInput {
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
}