const app = angular.module('app', ['ngResource']);

app.controller('todoCtrl', ['$scope', 'orderByFilter', '$resource', function ($scope, orderBy, $resource) {
  const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
  $scope.todos = [];

  var jsonResource = $resource('/data/todos.json');
  jsonResource.query({}, function(response) {
    $scope.todos = response;
    $scope.todos.map(function (todo) {
      todo.date = new Date(todo.date);
      return todo;
    })
  });

  $scope.todos = orderBy($scope.todos, $scope.propertyName, $scope.reverse);

  $scope.addTodo = function () {
    const item = {
      name: $scope.todoName,
      date: new Date(),
      completed: false
    };

    $scope.todos.push(item);
    $scope.todoName = '';
  };

  $scope.deleteTodo = function (index) {
    $scope.todos.splice(index, 1);
  };

  $scope.filterParameter = '';

  $scope.setFilterParameter = function (parameter) {
    $scope.filterParameter = parameter;
  };

  $scope.filterByCompleted = function () {
    return function (item) {
      if ($scope.filterParameter === '') {
        return true;
      } else {
        return item.completed === $scope.filterParameter;
      }
    };
  };

  $scope.filterByDatePeriod = function (item) {
    if (item.date.getTime() >= $scope.datePeriod.date) {
      return item;
    }
  };

  $scope.propertyName = '';
  $scope.reverse = false;

  $scope.sortBy = function (propertyName) {
    $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
      ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
    $scope.todos = orderBy($scope.todos, $scope.propertyName, $scope.reverse);
  };

  $scope.toggleEditMode = function () {
    event.target.closest('li').classList.toggle('editing');
  };

  $scope.saveTodo = function () {
    $scope.toggleEditMode();
  };

  $scope.options = [
    {date: 0, name: 'all'},
    {date: Date.now() - MILLISECONDS_IN_A_DAY, name: 'today'},
    {date: Date.now() - MILLISECONDS_IN_A_DAY * 7, name: 'week'},
    {date: Date.now() - MILLISECONDS_IN_A_DAY * 14, name: '2 weeks'},
  ];
}]);