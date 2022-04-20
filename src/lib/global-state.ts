import EventEmitter from 'events';

interface IGlobalState {
    [key:string]: string
}

type Namespace = string

export enum EVENTS {
    STATE_CHANGE = 'STATE_CHANGE'
}

const eventBus = new EventEmitter()

const globalState: IGlobalState = {}

export function setState(namespace: Namespace, value: any) {
    globalState[namespace] = value;
    eventBus.emit(EVENTS.STATE_CHANGE, value);
}

export function getState(namespace: Namespace) {
    return globalState[namespace];
}

type EventName = string | symbol
type Listener = {
    (state: any): void;
    (...args: any[]): void;
}

export const addEventListener = (eventName: EventName, listener: Listener) => {
    eventBus.on(eventName, listener)
};