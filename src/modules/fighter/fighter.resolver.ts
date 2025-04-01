import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FighterType } from './types/fighter.type';
import { CreateFighterInput } from './types/create-fighter.input';
import { UpdateFighterInput } from './types/update-fighter.input';
import { FighterService } from '../../application/services/fighter.service';
import { v4 as uuid } from 'uuid';

@Resolver(() => FighterType)
export class FighterResolver {
  constructor(private readonly fighterService: FighterService) {}

  @Query(() => [FighterType])
  async getAllFighters() {
    return this.fighterService.findAll();
  }

  @Query(() => FighterType, { nullable: true })
  async getFighter(@Args('id') id: string) {
    return this.fighterService.findById(id);
  }

  @Mutation(() => FighterType)
  async createFighter(@Args('input') input: CreateFighterInput) {
    return this.fighterService.create({
      id: uuid(),
      ...input,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  @Mutation(() => FighterType)
  async updateFighter(@Args('input') input: UpdateFighterInput) {
    const { id, ...data } = input;
    return this.fighterService.update(id, {
      ...data,
      updatedAt: new Date(),
    });
  }

  @Mutation(() => Boolean)
  async deleteFighter(@Args('id') id: string) {
    await this.fighterService.delete(id);
    return true;
  }
}
