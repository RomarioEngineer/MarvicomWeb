import { Component, OnInit } from '@angular/core';

const THEME = 'prontuarioTheme';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;

  readonly body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor() { }

  ngOnInit(): void {
    this.body.classList.add(THEME);
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnDestroy(): void {
    this.body.classList.remove(THEME);
  }
}
