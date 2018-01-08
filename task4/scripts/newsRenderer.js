import "../styles/scss/articles.scss";

export default class RenderComponent {
    constructor() {
    }

    renderArticles(articles) {
        const articlesContainer = document.getElementById("articles");
        articlesContainer.innerHTML = "";

        articles.forEach(response => {
            const articleWrapper = document.createElement("article");
            articleWrapper.innerHTML = new Article(response).render();
            articlesContainer.appendChild(articleWrapper);
        });
    }
}

const defaultData = (article) => {
    article.author = article.author || "";
    article.description = article.description || "";
    article.publishedAt = article.publishedAt && new Date(article.publishedAt).toLocaleDateString() || "";
    article.title = article.title || "";
    article.urlToImage = article.urlToImage || "images/placeholder.png";
    article.url = article.url || "";

    return article;
};

let article;

class Article {
    constructor(response) {
        if (!article) {
            article = this;
        }

        article.author = response.author;
        article.description = response.description;
        article.publishedAt = response.publishedAt;
        article.title = response.title;
        article.urlToImage = response.urlToImage;
        article.url = response.url;

        return defaultData(article);
    }

    render() {
        if (article.author.length) {
            return this.renderFull();
        } else {
            return this.renderWithoutAuthor();
        }
    };

    renderFull() {
        return `<a class="image-wrapper" href="${article.url}" target="_blank">
                    <img src="${article.urlToImage}" alt="${article.title}"/>
                </a>
                <a href="${article.url}" target="_blank">
                    <h2>${article.title}</h2>
                </a>
                <span class="date">${article.publishedAt}</span>
                <p>${article.description}</p>
                <span class="author">${article.author}</span>
            `;
    };

    renderWithoutAuthor() {
        return `
                <a class="image-wrapper" href="${article.url}" target="_blank">
                    <img src="${article.urlToImage}" alt="${article.title}"/>
                </a>
                <a href="${article.url}" target="_blank">
                    <h2>${article.title}</h2>
                </a>
                <span class="date">${article.publishedAt}</span>
                <p>${article.description}</p>
            `;
    }
}