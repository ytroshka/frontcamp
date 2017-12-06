(() => {
    class NewsApi {
        constructor(baseUrl, apiKey) {
            this.baseUrl = baseUrl;
            this.apiKey = apiKey;
        }

        getSources() {
            fetch(`${this.baseUrl}/sources?apiKey=${this.apiKey}`)
                .then(response => response.json())
                .then(data => this.renderSources(data.sources))
                .then(() => this.addSelectListener())
                .catch(alert);
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
                if (select.selectedIndex) {
                    this.getNews(selectedSource.id);
                } else {
                    articlesContainer.innerHTML = "";
                }
            });
        }

        getNews(source) {
            fetch(`${this.baseUrl}/top-headlines?sources=${source}&apiKey=${this.apiKey}`)
                .then(response => response.json())
                .then(data => this.renderArticles(data.articles))
                .catch(alert);
        }

        renderArticles(articles) {
            const articlesContainer = document.getElementById("articles");
            articlesContainer.innerHTML = "";

            articles.forEach(article => {
                const articleWrapper = document.createElement("article");
                articleWrapper.innerHTML = this.createArticle(article);
                articlesContainer.appendChild(articleWrapper);
            });
        }

        createArticle(article) {
            const defaultImage = "images/placeholder.png";
            let {author, description, publishedAt, title, urlToImage, url} = article;

            return `
                <a class="image-wrapper" href="${url || ""}" target="_blank">
                    <img src="${urlToImage || defaultImage}" alt="${title || ""}"/>
                </a>
                <a href="${url || ""}" target="_blank">
                    <h2>${title || ""}</h2>
                </a>
                <span class="date">${publishedAt && new Date(publishedAt).toLocaleDateString() || ""}</span>
                <p>${description || ""}</p>
                <span class="author">${author || ""}</span>
            `;
        }
    }

    const baseUrl = "https://newsapi.org/v2";
    const apiKey = "762fef256cf642a3bc9c21296a4ed824";

    const newsApi = new NewsApi(baseUrl, apiKey);
    newsApi.getSources();
})();