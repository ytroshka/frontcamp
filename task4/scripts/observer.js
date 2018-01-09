let instance;

export default class EventObserver {
    constructor() {
        if (instance) {
            return instance;
        }
        
        this.observers = {};
        instance = this;
    }

    subscribe(eventName, fn) {
        if (!this.observers[eventName]) {
            this.observers[eventName] = [];
        }
        this.observers[eventName].push(fn);
    }

    unsubscribe(eventName, fn) {
        this.observers[eventName] = this.observers[eventName].filter(subscriber => subscriber !== fn);
    }

    broadcast(eventName, data) {
        if (this.observers[eventName]){
            this.observers[eventName].forEach(subscriber => subscriber(data, eventName));
        }
    }
}