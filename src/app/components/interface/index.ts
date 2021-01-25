import {IOwner} from './owner';

export interface ICars {
  id: number;
  model: string;
  power: number;
  year: number;
  color: string;
  owner: IOwner;
}
