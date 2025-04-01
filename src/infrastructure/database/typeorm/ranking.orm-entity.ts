import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';
import { WeightClass } from '../../../domain/value-objects/weight-class.enum';

@Entity('rankings')
@Unique(['fighterId', 'weightClass'])
export class RankingOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fighterId: string;

  @Column({ type: 'enum', enum: WeightClass })
  weightClass: WeightClass;

  @Column()
  rank: number;
}
