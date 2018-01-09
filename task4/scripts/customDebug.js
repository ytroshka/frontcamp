import Observer from './observer';

const observer = new Observer();

export default class CustomDebug {
    init() {
        observer.subscribe('sourcesRequestStarted', this.log);
        observer.subscribe('sourcesRequestCompleted', this.log);
        observer.subscribe('renderSourcesStarted', this.log);
        observer.subscribe('renderSourcesCompleted', this.log);
        observer.subscribe('newsRequestStarted', this.log);
        observer.subscribe('newsRequestCompleted', this.log);
    }

    log(data, eventName) {
        let text = `eventName - ${eventName}`;
        if(data !== undefined){
            text += `, data - ${JSON.stringify(data)}`;
        }
        console.log('%cDEBUG::', 'font-weight: bold; color:#0F206B', text);
    }
}