export default class NewsApi {
    constructor(baseUrl, apiKey) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
    }

    getSources() {
        fetch(`${this.baseUrl}/sources?apiKey=${this.apiKey}`)
            .then(response => response.json())
            .then(data => this.renderSources(data.sources))
            .then(() => this.addSelectListener())
            .catch(console.log);
    }

    renderSources(sources) {
        const select = document.getElementById("sources");
        const fragment = document.createDocumentFragment();

        sources.forEach(({id, name, description}) => {
            const option = document.createElement("option");
            [option.id, option.textContent, option.title] = [id, name, description];
            fragment.appendChild(option);
        });

        select.appendChild(fragment);
    }

    addSelectListener() {
        const select = document.getElementById("sources");
        const articlesContainer = document.getElementById("articles");

        select.addEventListener("change", () => {
            const selectedSource = select.options[select.selectedIndex];
            articlesContainer.innerHTML = "";
            if (select.selectedIndex) {
                this.getNews(selectedSource.id);
            }
        });
    }

    getNews(source) {
        fetch(`${this.baseUrl}/top-headlines?sources=${source}&apiKey=${this.apiKey}`)
            .then(response => response.json())
            .then((data) => this.addButtonListener(data))
            .catch(console.log);
    }

    addButtonListener(data) {
        const button = document.getElementsByClassName("show-news")[0];
        button.addEventListener("click", () => {
            newsObserver.broadcast();
            import('./newsRenderer').then(module => {
                const renderer = module.default;
                const newsRenderer = new renderer();
                newsRenderer.renderArticles(data.articles);
            });
        });
    }
}

class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(subscriber => subscriber !== fn);
    }

    broadcast(data) {
        this.observers.forEach(subscriber => subscriber(data));
    }
}

const newsObserver = new EventObserver();
newsObserver.subscribe(() => {
    console.log('Listener added');
});