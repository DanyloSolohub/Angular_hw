import {Component, Input, OnInit} from '@angular/core';
import {IOwner} from '../interface/owner';
import {ActivatedRoute} from '@angular/router';
import {ICars} from '../interface';
import {cars} from '../db/data';


@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  @Input()
  owner: IOwner;
  cars: ICars[] = cars;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      for (const car of cars) {
        if (+value.id === car.id) {
          this.owner = car.owner;
        }
      }
    });
  }

  ngOnInit(): void {

  }

}
