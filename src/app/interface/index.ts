import {IOwner} from './owner';

export interface ICars {
  model: string;
  power: number;
  year: number;
  color: string;
  owner: IOwner;
}
