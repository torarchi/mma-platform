import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { FightMethod } from '../../../domain/value-objects/fight-method.enum';

@Entity('fights')
export class FightOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  eventId: string;

  @Column()
  fighter1Id: string;

  @Column()
  fighter2Id: string;

  @Column({ nullable: true })
  winnerId?: string;

  @Column({ type: 'enum', enum: FightMethod })
  method: FightMethod;

  @Column()
  round: number;

  @Column({ type: 'time' })
  time: string;

  @CreateDateColumn()
  createdAt: Date;
}
