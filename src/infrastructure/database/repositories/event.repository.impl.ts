import { Injectable } from '@nestjs/common';
import { EventRepository } from '../../../domain/repositories/event.repository';
import { Event } from '../../../domain/entities/event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventOrmEntity } from '../typeorm/event.orm-entity';

@Injectable()
export class EventRepositoryImpl implements EventRepository {
  constructor(
    @InjectRepository(EventOrmEntity)
    private readonly repo: Repository<EventOrmEntity>,
  ) {}

  async findAll(): Promise<Event[]> {
    return this.repo.find();
  }

  async findById(id: string): Promise<Event | null> {
    return this.repo.findOne({ where: { id } });
  }

  async create(event: Event): Promise<Event> {
    return this.repo.save(event);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }

  async update(id: string, data: Partial<Event>): Promise<Event> {
    await this.repo.update(id, data);
    const event = await this.findById(id);
    if (!event) {
      throw new Error(`Event with id ${id} not found.`);
    }
    return event;
  }
}
