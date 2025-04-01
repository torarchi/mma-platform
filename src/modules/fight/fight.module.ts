import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FightOrmEntity } from '../../infrastructure/database/typeorm/fight.orm-entity';
import { FightRepositoryImpl } from '../../infrastructure/database/repositories/fight.repository.impl';
import { FightService } from '../../application/services/fight.service';
import { FightResolver } from './fight.resolver';
import { FightRepository } from '../../domain/repositories/fight.repository';
import { FighterStatisticsModule } from '../fighter-statistics/fighter-statistics.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([FightOrmEntity]),
    FighterStatisticsModule,
  ],
  providers: [
    FightResolver,
    FightService,
    {
      provide: 'FightRepository',
      useClass: FightRepositoryImpl,
    },
  ],
  exports: [FightService],
})
export class FightModule {}