import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FighterStatisticsOrmEntity } from '../../infrastructure/database/typeorm/fighter-statistics.orm-entity';
import { FighterStatisticsService } from './fighter-statistics.service';
import { FighterStatisticsResolver } from './fighter-statistics.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([FighterStatisticsOrmEntity])],
  providers: [FighterStatisticsService, FighterStatisticsResolver],
  exports: [FighterStatisticsService],
})
export class FighterStatisticsModule {}