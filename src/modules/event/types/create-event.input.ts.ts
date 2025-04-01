import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateEventInput {
  @Field()
  name: string;

  @Field()
  locationId: string;

  @Field()
  date: Date;
}
