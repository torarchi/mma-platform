import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateEventInput } from './create-event.input.ts';

@InputType()
export class UpdateEventInput extends PartialType(CreateEventInput) {
  @Field(() => ID)
  id: string;
}
