import Observer from './observer';

const observer = new Observer();

export default class Report {
    init() {
        this.initGetSourcesReport();
        this.initRenderSourcesReport();
        this.initGetNewsReport();
    }

    log(eventName) {
        console.log(`DEBUG::${eventName}`);
    }

    initGetSourcesReport(){
        let temp;

        observer.subscribe('getSourcesStarder', () => {
            temp = Date.now();
        });

        observer.subscribe('getSourcesCompleted', () => {
            this.report({
                time: Date.now() - temp,
                eventName: 'getSourcesCompleted'
            });
        });
    }

    initRenderSourcesReport() {
        let temp;

        observer.subscribe('renderSourcesStarted', () => {
            temp = Date.now();
        });

        observer.subscribe('renderSourcesCompleted', () => {
            this.report({
                time: Date.now() - temp,
                eventName: 'renderSourcesCompleted'
            });
        });
    }

    initGetNewsReport() {
        let temp;

        observer.subscribe('getNewsStarted', () => {
            temp = Date.now();
        });

        observer.subscribe('getNewsCompleted', () => {
            this.report({
                time: Date.now() - temp,
                eventName: 'getNewsCompleted'
            });
        });
    }

    report({eventName, time}) {
        let text = `eventName - ${eventName}, time - ${time}`;

        console.log('%cREPORT::', 'font-weight: bold; color:#06650A', text);
    }
}