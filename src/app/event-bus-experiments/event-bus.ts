import * as _ from 'lodash';

export const LESSONS_LIST_AVAILABLE = 'LESSONS_LIST_AVAILABLE';
export const ADD_NEW_LESSON = 'ADD_NEW_LESSON';

export interface Observer {ADD_NEW_LESSON
  notify(data: any);
}

interface Subject {
  registerObserver(eventType: string, obs: Observer);
  unRegisterObserver(eventType: string, obs: Observer);
  notifyObservers(eventType: string, data: any);
}

class EventBus implements Subject {
  private observers: { [key: string]: Observer[] } = {};

  registerObserver(eventType: string, obs: Observer) {
    this.observersPerEventType(eventType).push(obs);
  }

  unRegisterObserver(eventType: string, obs: Observer) {
    _.remove(this.observersPerEventType(eventType), el => el === obs);
  }

  notifyObservers(eventType: string, data: any) {
    this.observersPerEventType(eventType).forEach((obs) => {
      obs.notify(data);
    });
  }

  private observersPerEventType(eventType: string): Observer[] {
    const observerPerType = this.observers[eventType];
    if (!observerPerType) {
      return this.observers[eventType] = [];
    }
    return this.observers[eventType];
  }
}

export const GlobalEventBus = new EventBus();
