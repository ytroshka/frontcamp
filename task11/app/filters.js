app.filter('filterByCompleted', function () {
    return function (data, filterParameter) {
        return data.filter(function (item) {
            if (filterParameter === '') {
                return true;
            } else {
                return item.completed === filterParameter;
            }
        });
    };
});

app.filter('sortBy', ['orderByFilter', function (orderBy) {
    return function (data, propertyName, reverse) {
        return orderBy(data, propertyName, reverse);
    };
}]);

/*
$scope.propertyName = '';
$scope.reverse = false;

$scope.sortBy = function (propertyName) {
    $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
        ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
    $scope.todos = orderBy($scope.todos, $scope.propertyName, $scope.reverse);
};*/
