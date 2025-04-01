import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EventType } from './types/event.type';
import { CreateEventInput } from './types/create-event.input.ts';
import { UpdateEventInput } from './types/update-event.input.ts';
import { EventService } from '../../application/services/event.service';
import { v4 as uuid } from 'uuid';

@Resolver(() => EventType)
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Query(() => [EventType])
  async getAllEvents() {
    return this.eventService.findAll();
  }

  @Query(() => EventType, { nullable: true })
  async getEvent(@Args('id') id: string) {
    return this.eventService.findById(id);
  }

  @Mutation(() => EventType)
  async createEvent(@Args('input') input: CreateEventInput) {
    return this.eventService.create({
      id: uuid(),
      ...input,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  @Mutation(() => EventType)
  async updateEvent(@Args('input') input: UpdateEventInput) {
    const { id, ...data } = input;
    const event = await this.eventService.findById(id);
    if (!event) {
      throw new Error(`Event with id ${id} not found`);
    }

    return this.eventService.update(id, {
      ...data,
      updatedAt: new Date(),
    });
  }

  @Mutation(() => Boolean)
  async deleteEvent(@Args('id') id: string) {
    await this.eventService.delete(id);
    return true;
  }
}
