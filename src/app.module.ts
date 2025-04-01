import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

import { FighterResolver } from './infrastructure/graphql/resolvers/fighter.resolver';
import { FighterService } from './application/services/fighter.service';
import { FighterRepositoryImpl } from './infrastructure/database/repositories/fighter.repository.impl';
import { FighterOrmEntity } from './infrastructure/database/typeorm/fighter.orm-entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([FighterOrmEntity]),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
    }),
  ],
  providers: [
    FighterResolver,
    FighterService,
    {
      provide: 'FighterRepository',
      useClass: FighterRepositoryImpl,
    },
  ],
})
export class AppModule {}
