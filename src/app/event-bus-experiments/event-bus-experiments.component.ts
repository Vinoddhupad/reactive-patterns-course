import { Component, OnInit } from '@angular/core';
import {GlobalEventBus, LESSONS_LIST_AVAILABLE} from './event-bus';
import {testLessons} from '../shared/model/test-lessons';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Top level component broadcast all lessons ...');
    GlobalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, testLessons.slice(0));
  }

}
