app.controller('addTodoCtrl', ['$scope', '$location', 'TodoFactory', function ($scope, $location, TodoFactory) {
    $scope.addTodo = function () {
        TodoFactory.addTodo(this.todoName);
        this.todoName = '';
        $location.path('/');
    };
}]);