import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FighterOrmEntity } from '../../infrastructure/database/typeorm/fighter.orm-entity';
import { FighterRepositoryImpl } from '../../infrastructure/database/repositories/fighter.repository.impl';
import { FighterService } from '../../application/services/fighter.service';
import { FighterResolver } from './fighter.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([FighterOrmEntity])],
  providers: [
    FighterResolver,
    FighterService,
    {
      provide: 'FighterRepository',
      useClass: FighterRepositoryImpl,
    },
  ],
  exports: [FighterService],
})
export class FighterModule {}
