import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceInLeft, flash } from 'ng-animate';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('bounceInLeft', [transition('void => *', useAnimation( bounceInLeft, {
      params: { timing: 2 }
    }))]),
    trigger('flash', [transition('* => void', useAnimation( flash, {
      params: { timing: 1 }
    }))])
  ]
})
export class HeaderComponent implements OnInit {

  toggleBool = false;
  constructor() { }

  ngOnInit() {
  }

  ToggleMenu() {
    console.log('Toggle');
    this.toggleBool = (this.toggleBool === false) ? this.toggleBool = true : this.toggleBool = false;
    console.log(this.toggleBool);
  }

}
