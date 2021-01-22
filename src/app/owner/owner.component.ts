import {Component, Input, OnInit} from '@angular/core';
import {IOwner} from '../interface/owner';


@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  @Input()
  owner: IOwner;
  constructor() {
  }

  ngOnInit(): void {
  }

}
