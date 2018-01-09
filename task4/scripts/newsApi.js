import Observer from './observer';

const observer = new Observer();

export default class NewsApi {
    constructor(baseUrl, apiKey) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
    }

    getSources() {
        observer.broadcast('getSourcesStarted');

        fetch(`${this.baseUrl}/sources?apiKey=${this.apiKey}`)
            .then(response => response.json())
            .then((data) => {
                observer.broadcast('getSourcesCompleted', {status: 1});
                return data;
            }).then(data => this.renderSources(data.sources))
            .then(() => this.addSelectListener())
            .catch(console.log);
    }

    renderSources(sources) {
        const select = document.getElementById("sources");
        const fragment = document.createDocumentFragment();

        observer.broadcast('renderSourcesStarted');

        sources.forEach(({id, name, description}) => {
            const option = document.createElement("option");
            [option.id, option.textContent, option.title] = [id, name, description];
            fragment.appendChild(option);
        });

        observer.broadcast('renderSourcesCompleted');

        select.appendChild(fragment);
    }

    addSelectListener() {
        const select = document.getElementById("sources");
        const articlesContainer = document.getElementById("articles");

        addEvent(select, 'change', () => {
            const selectedSource = select.options[select.selectedIndex];
            articlesContainer.innerHTML = "";
            if (select.selectedIndex) {
                this.getNews(selectedSource.id);
            }
        });
    }

    getNews(source) {
        observer.broadcast('getNewsStarted');
        fetch(`${this.baseUrl}/top-headlines?sources=${source}&apiKey=${this.apiKey}`)
            .then(response => response.json())
            .then((data) => {
                observer.broadcast('getNewsCompleted');
                return data;
            })
            .then((data) => this.addButtonListener(data))
            .catch(console.log);
    }

    addButtonListener(data) {
        const button = document.getElementsByClassName("show-news")[0];
        addEvent(button, 'click', () => {
            import('./newsRenderer').then(module => {
                const renderer = module.default;
                const newsRenderer = new renderer();
                newsRenderer.renderArticles(data.articles);
            });
        });
    }
}

function addEvent(element, eventName, handler) {
    if (element.addEventListener) {
        element.addEventListener(eventName, handler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, handler);
    } else {
        element['on' + eventName] = handler;
    }
}