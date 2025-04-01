import { Event } from '../entities/event.entity';

export interface EventRepository {
  findAll(): Promise<Event[]>;
  findById(id: string): Promise<Event | null>;
  create(event: Event): Promise<Event>;
  delete(id: string): Promise<void>;
}
