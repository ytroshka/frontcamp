app.controller('addNewsCtrl',
    ['$scope', '$location', 'NewsFactory',
        function ($scope, $location, NewsFactory) {
            $scope.addNews = () => {
                NewsFactory.addNews($scope.newsTitle, $scope.newsContent);
                $scope.newsTitle = '';
                $scope.newsContent = '';
                $location.path('/');
            };
        }
    ]
);