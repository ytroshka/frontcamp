app.controller('addNewsCtrl',
    ['$scope', '$location', 'NewsFactory',
        function ($scope, $location, NewsFactory) {
            $scope.save = () => {
                NewsFactory.addNews($scope.newsTitle, $scope.newsContent);
                $scope.newsTitle = '';
                $scope.newsContent = '';
                $location.path('/');
            };
        }
    ]
);