import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateFighterInput } from './create-fighter.input';

@InputType()
export class UpdateFighterInput extends PartialType(CreateFighterInput) {
  @Field(() => ID)
  id: string;
}
