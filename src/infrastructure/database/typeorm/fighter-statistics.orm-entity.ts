import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, UpdateDateColumn } from 'typeorm';

@Entity('fighter_statistics')
export class FighterStatisticsOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  fighterId: string;

  @Column({ default: 0 })
  wins: number;

  @Column({ default: 0 })
  losses: number;

  @Column({ default: 0 })
  draws: number;

  @Column({ default: 0 })
  noContest: number;

  @Column({ default: 0 })
  knockouts: number;

  @Column({ default: 0 })
  submissions: number;

  @UpdateDateColumn()
  updatedAt: Date;
}
