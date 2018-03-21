app.controller('addTodoCtrl',
  ['$scope', '$location', 'TodoFactory',
    function ($scope, $location, TodoFactory) {
      $scope.addTodo = () => {
        TodoFactory.addTodo($scope.todoName);
        $scope.todoName = '';
        $location.path('/');
      };
    }
  ]
);