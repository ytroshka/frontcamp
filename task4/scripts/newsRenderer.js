import "../styles/scss/articles.scss";

export default class RenderComponent {
    constructor() {
    }

    renderArticles(articles) {
        const articlesContainer = document.getElementById("articles");
        clearContent(articlesContainer);

        articles.forEach(response => {
            const articleWrapper = document.createElement("article");
            let strategy = response.author ? new TemplateWithAuthor() : new Template();

            articleWrapper.innerHTML = new Article().setStrategy(strategy).render(response);
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

        return article;
    }

    render(article) {
        defaultData(article);
        return this.template.createTemplate(article);
    }

    setStrategy(template) {
        this.template = template;
        return this;
    }
}

class Template {
    createTemplate(article) {
        return `<a class="image-wrapper" href="${article.url}" target="_blank">
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

class TemplateWithAuthor {
    createTemplate(article) {
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
    }
}

function clearContent(element) {
    if(element.textContent) {
        element.textContent = "";
    } else {
        element.innerHTML = "";
    }
}