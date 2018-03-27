app.factory('NewsFactory', ['$resource', ($resource) => {
    let news = [];

    $resource('./data/news.json').query({}, response => {
        news = response;
    });

    return {
        getNews: () => {
            return news;
        },

        addNews: (title, content) => {
            news.push({
                title: title,
                content: content,
                id: Date.now()
            });
        },

        deleteNews: index => {
            news.splice(index, 1);
        },

        saveNews: (index, todo) => {
            news[index] = todo;
        }
    };
}]);
