const app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $routeProvider.when('/add', {
    templateUrl: 'templates/add.html'
  }).when('/edit/:id', {
    templateUrl: 'templates/edit.html'
  }).otherwise({
    templateUrl: 'templates/main.html'
  });
}]).controller('todoCtrl', ['$scope', 'orderByFilter', '$resource', '$location', '$routeParams', function ($scope, orderBy, $resource, $location, $routeParams) {

  const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;

  $scope.todos = [];

  const jsonResource = $resource('./data/todos.json');
  jsonResource.query({}, function (response) {
    $scope.todos = response;
    $scope.todos.map(function (todo) {
      todo.date = new Date(todo.date);
      return todo;
    })
  });

  $scope.todos = orderBy($scope.todos, $scope.propertyName, $scope.reverse);

  $scope.addTodo = function () {
    const item = {
      name: this.todoName,
      date: new Date(),
      completed: false,
      id: Date.now()
    };

    this.todos.push(item);
    this.todoName = '';
    $location.path('/');
  };

  $scope.deleteTodo = function (index) {
    $scope.todos.splice(index, 1);
  };

  $scope.filterParameter = '';

  $scope.setFilterParameter = function (filterParameter) {
    $scope.filterParameter = filterParameter;
  };

  $scope.datePeriod = 0;

  $scope.setDatePeriod = function (datePeriod) {
    $scope.datePeriod = datePeriod;
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

  $scope.filterByDatePeriod = function () {
    return function (item) {
      return item.date.getTime() - $scope.datePeriod >= 0;
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
    const id = +$routeParams.id;
    const item = $scope.todos.find(function (value) {
      return value.id === id;
    });
    console.log(item);
    $scope.newTodoName = item.name;
    $scope.newTodoDate = item.date;
    console.log($scope);
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

  $scope.dateOptions = [
    {date: 0, name: 'all'},
    {date: Date.now() - MILLISECONDS_IN_A_DAY, name: 'today'},
    {date: Date.now() - MILLISECONDS_IN_A_DAY * 7, name: 'week'},
    {date: Date.now() - MILLISECONDS_IN_A_DAY * 14, name: '2 weeks'},
  ];
}]);