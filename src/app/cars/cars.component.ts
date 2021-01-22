import {Component, OnInit} from '@angular/core';
import {cars} from '../../db/data';
import {ICars} from '../interface';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: ICars[] = cars;

  constructor() {
  }

  ngOnInit(): void {
  }

}
