app.controller('editNewsCtrl',
    ['$scope', '$location', '$routeParams', 'NewsFactory',
        function ($scope, $location, $routeParams, NewsFactory) {
            $scope.toggleEditMode = () => {
                const id = +$routeParams.id;
                const item = NewsFactory.getNews().find(value => {
                    return value.id === id;
                });

                $scope.currentNewsTitle = item.title;
                $scope.currentNewsContent = item.content;
            };

            $scope.saveNews = () => {
                const id = +$routeParams.id;

                const index = NewsFactory.getNews().findIndex(value => {
                    return value.id === id;
                });

                const item = NewsFactory.getNews().find(value => {
                    return value.id === id;
                });

                item.title = $scope.currentNewsTitle;
                item.content = $scope.currentNewsContent;

                NewsFactory.saveNews(index, item);

                $location.path('/');
            };
        }
    ]
);