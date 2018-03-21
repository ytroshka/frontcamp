app.controller('editTodoCtrl', ['$scope', '$location', '$routeParams', function ($scope, $location, $routeParams) {
    $scope.toggleEditMode = function () {
        const id = +$routeParams.id;
        const item = $scope.todos.find(function (value) {
            return value.id === id;
        });
        $scope.newTodoName = item.name;
        $scope.newTodoDate = item.date;
    };

    $scope.saveTodo = function () {
        const id = +$routeParams.id;

        const index = $scope.todos.findIndex(function (value) {
            return value.id === id;
        });

        const item = $scope.todos.find(function (value) {
            return value.id === id;
        });

        item.name = this.newTodoName;
        item.date = this.newTodoDate;

        $scope.todos[index] = item;

        $location.path('/');
    };
}]);