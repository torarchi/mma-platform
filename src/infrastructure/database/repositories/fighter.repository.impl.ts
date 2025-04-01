import { Injectable } from '@nestjs/common';
import { FighterRepository } from '../../../domain/repositories/fighter.repository';
import { Fighter } from '../../../domain/entities/fighter.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FighterOrmEntity } from '../typeorm/fighter.orm-entity';

@Injectable()
export class FighterRepositoryImpl implements FighterRepository {
  constructor(
    @InjectRepository(FighterOrmEntity)
    private readonly repo: Repository<FighterOrmEntity>,
  ) {}

  async findAll(): Promise<Fighter[]> {
    return this.repo.find();
  }

  async findById(id: string): Promise<Fighter | null> {
    return this.repo.findOne({ where: { id } });
  }

  async create(fighter: Fighter): Promise<Fighter> {
    return this.repo.save(fighter);
  }

  async update(id: string, data: Partial<Fighter>): Promise<Fighter> {
    await this.repo.update(id, data);
    const fighter = await this.findById(id);
    if (!fighter) {
      throw new Error(`Fighter with id ${id} not found.`);
    }
    return fighter;
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
