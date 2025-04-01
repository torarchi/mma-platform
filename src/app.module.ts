import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

import { FighterModule } from './modules/fighter/fighter.module';
import { EventModule } from './modules/event/event.module';
import { FightModule } from './modules/fight/fight.module';
import { FighterStatisticsModule } from './modules/fighter-statistics/fighter-statistics.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    FighterModule,
    EventModule,
    FightModule,
    FighterStatisticsModule,
  ],
})
export class AppModule {}
