import {Component} from '@angular/core';
import {GlobalEventBus, Observer, LESSONS_LIST_AVAILABLE} from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer {
  ADD_NEW_LESSON;
  lessons: Lesson[] = [];
  constructor() {
    console.log('Lesson list component is registered as observer ...');
    GlobalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);
  }

  notify(data: Lesson[]) {
    console.log('Lesson list component recieved data ...');
    this.lessons = data;
  }
}
