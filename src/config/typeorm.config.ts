import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { FighterOrmEntity } from '../infrastructure/database/typeorm/fighter.orm-entity';
import { EventOrmEntity } from '../infrastructure/database/typeorm/event.orm-entity';
import { FightOrmEntity } from '../infrastructure/database/typeorm/fight.orm-entity';
import { RankingOrmEntity } from '../infrastructure/database/typeorm/ranking.orm-entity';
import { FighterStatisticsOrmEntity } from '../infrastructure/database/typeorm/fighter-statistics.orm-entity';
import { EventLocationOrmEntity } from '../infrastructure/database/typeorm/event-location.orm-entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'your_password',
  database: 'mma_db',
  synchronize: true, // dev only, prod = false + миграции
  autoLoadEntities: true,
  entities: [
    FighterOrmEntity,
    EventOrmEntity,
    FightOrmEntity,
    RankingOrmEntity,
    FighterStatisticsOrmEntity,
    EventLocationOrmEntity,
  ],
};
