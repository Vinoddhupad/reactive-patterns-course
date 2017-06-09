import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.css']
})
export class BrowserEventExperimentsComponent implements OnInit {
  hoverSelection: HTMLElement;

  constructor() {
  }

  ngOnInit() {
    this.hoverSelection = document.getElementById('hover');
    this.hoverSelection.addEventListener('mousemove', this.onMouseMove);
    this.hoverSelection.addEventListener('click', this.onClick);
  }

  unsubscribe() {
    this.hoverSelection.removeEventListener('mousemove', this.onMouseMove);
  }

  onClick(event: Event) {
    console.log('Click', event)
  }

  onMouseMove(event: Event) {
    console.log('Mouse move', event);
  }
}
