app.controller('newsCtrl',
    ['$scope', 'NewsFactory',
        function ($scope, NewsFactory) {
            $scope.news = NewsFactory.getNews();

            $scope.deleteNews = index => {
                NewsFactory.deleteNews(index);
            };

            /**SORT FILTER**/

            $scope.propertyName = '';
            $scope.reverse = false;

            $scope.sortBy = propertyName => {
                $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName) ? !$scope.reverse : false;
                $scope.propertyName = propertyName;
            };

            /**PAGINATION**/
            
            $scope.current = 0;
            $scope.pageSize = 4;

            $scope.numberOfPages = () => Math.ceil($scope.news.length / $scope.pageSize);
        }
    ]
);