import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.updateDateTime();
    this.getBrowserLocale();
  }

  currentDateTime!: Date;

  updateDateTime() {
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
    /* Update every 1 second (1000 milliseconds) */
  }

  getBrowserLocale() {
    let myLocale = navigator.language;
    console.log('My locale:', myLocale);
  }

}
