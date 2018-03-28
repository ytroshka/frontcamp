app.controller('editNewsCtrl',
    ['$scope', '$location', '$routeParams', 'NewsFactory',
        function ($scope, $location, $routeParams, NewsFactory) {
            $scope.$on = function () {
                const id = +$routeParams.id;
                const item = NewsFactory.getNews().find(value => {
                    return value.id === id;
                });

                $scope.newsTitle = item.title;
                $scope.newsContent = item.content;
            };

            $scope.save = () => {
                const id = +$routeParams.id;

                const index = NewsFactory.getNews().findIndex(value => {
                    return value.id === id;
                });

                const item = NewsFactory.getNews().find(value => {
                    return value.id === id;
                });

                item.title = $scope.newsTitle;
                item.content = $scope.newsContent;

                NewsFactory.saveNews(index, item);

                $location.path('/');
            };
        }
    ]
);