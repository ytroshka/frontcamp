app.controller('editTodoCtrl',
  ['$scope', '$location', '$routeParams', 'TodoFactory',
    function ($scope, $location, $routeParams, TodoFactory) {
      $scope.toggleEditMode = () => {
        const id = +$routeParams.id;
        const item = TodoFactory.getTodos().find(value => {
          return value.id === id;
        });

        $scope.newTodoName = item.name;
        $scope.newTodoDate = item.date;
      };

      $scope.saveTodo = () => {
        const id = +$routeParams.id;

        const index = TodoFactory.getTodos().findIndex(value => {
          return value.id === id;
        });

        const item = TodoFactory.getTodos().find(value => {
          return value.id === id;
        });

        item.name = $scope.newTodoName;
        item.date = $scope.newTodoDate;

        TodoFactory.saveTodo(index, item);

        $location.path('/');
      };
    }
  ]
);