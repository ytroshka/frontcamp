import "../styles/scss/articles.scss";

export default class RenderComponent {
    constructor() {}

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
        console.log(article);
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