import { Gender } from '../value-objects/gender.enum';
import { WeightClass } from '../value-objects/weight-class.enum';

export interface Fighter {
  id: string;
  fullName: string;
  nickname?: string;
  gender: Gender;
  heightCm?: number;
  weightClass: WeightClass;
  nationality?: string;
  team?: string;
  createdAt: Date;
  updatedAt: Date;
}
