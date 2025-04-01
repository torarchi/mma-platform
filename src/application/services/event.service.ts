import { Injectable, Inject } from '@nestjs/common';
import { EventRepository } from '../../domain/repositories/event.repository';
import { Event } from '../../domain/entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @Inject('EventRepository')
    private readonly eventRepo: EventRepository,
  ) {}

  findAll(): Promise<Event[]> {
    return this.eventRepo.findAll();
  }

  findById(id: string): Promise<Event | null> {
    return this.eventRepo.findById(id);
  }

  async create(event: Event): Promise<Event> {
    return this.eventRepo.create(event);
  }

  async update(id: string, data: Partial<Event>): Promise<Event> {
    return this.eventRepo.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return this.eventRepo.delete(id);
  }
}