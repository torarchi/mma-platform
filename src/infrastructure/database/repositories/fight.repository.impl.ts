import { Injectable } from '@nestjs/common';
import { FightRepository } from '../../../domain/repositories/fight.repository';
import { Fight } from '../../../domain/entities/fight.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FightOrmEntity } from '../typeorm/fight.orm-entity';

@Injectable()
export class FightRepositoryImpl implements FightRepository {
  constructor(
    @InjectRepository(FightOrmEntity)
    private readonly repo: Repository<FightOrmEntity>,
  ) {}

  async findAll(): Promise<Fight[]> {
    return this.repo.find();
  }

  async findById(id: string): Promise<Fight | null> {
    return this.repo.findOne({ where: { id } });
  }

  async create(fight: Fight): Promise<Fight> {
    return this.repo.save(fight);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }

  async update(id: string, data: Partial<Fight>): Promise<Fight> {
    await this.repo.update(id, data);
    const fight = await this.findById(id);
    if (!fight) {
      throw new Error(`Fight with id ${id} not found.`);
    }
    return fight;
  }
}
