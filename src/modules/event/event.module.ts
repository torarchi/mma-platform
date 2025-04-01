import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventOrmEntity } from '../../infrastructure/database/typeorm/event.orm-entity';
import { EventLocationOrmEntity } from '../../infrastructure/database/typeorm/event-location.orm-entity';
import { EventRepositoryImpl } from '../../infrastructure/database/repositories/event.repository.impl';
import { EventService } from '../../application/services/event.service';
import { EventResolver } from './event.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([EventOrmEntity, EventLocationOrmEntity])],
  providers: [
    EventResolver,
    EventService,
    {
      provide: 'EventRepository',
      useClass: EventRepositoryImpl,
    },
  ],
  exports: [EventService],
})
export class EventModule {}
