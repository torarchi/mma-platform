import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RankingOrmEntity } from '../../infrastructure/database/typeorm/ranking.orm-entity';
import { RankingService } from './ranking.service';
import { RankingResolver } from './ranking.resolver';
import { UpdateRankingsUseCase } from '../../application/use-cases/update-rankings.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([RankingOrmEntity])],
  providers: [RankingService, RankingResolver, UpdateRankingsUseCase],
  exports: [RankingService, UpdateRankingsUseCase],
})
export class RankingModule {}
