import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Gender } from '../../../domain/value-objects/gender.enum';
import { WeightClass } from '../../../domain/value-objects/weight-class.enum';

@Entity('fighters')
export class FighterOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @Column({ nullable: true })
  nickname?: string;

  @Column({ type: 'enum', enum: Gender })
  gender: Gender;

  @Column({ nullable: true })
  heightCm?: number;

  @Column({ type: 'enum', enum: WeightClass })
  weightClass: WeightClass;

  @Column({ nullable: true })
  nationality?: string;

  @Column({ nullable: true })
  team?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
