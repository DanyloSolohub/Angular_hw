import {Component, Input, OnInit} from '@angular/core';
import {ICars} from '../interface';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  @Input()
  car: ICars;

  constructor() {
  }

  ngOnInit(): void {
  }

}
