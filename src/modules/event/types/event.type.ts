import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class EventType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  locationId: string;

  @Field()
  date: Date;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}