import { Component, OnInit } from '@angular/core';

const THEME = 'defaultTheme';
@Component({
  selector: 'app-default',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  sideBarOpen = true;

  readonly body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor() { }

  ngOnInit(): void {
    this.body.classList.add(THEME);
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngonDestroy(): void {
    this.body.classList.remove(THEME);
  }
}
