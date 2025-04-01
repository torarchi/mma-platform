import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateFightInput } from './create-fight.input';

@InputType()
export class UpdateFightInput extends PartialType(CreateFightInput) {
  @Field(() => ID)
  id: string;
}
