app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider.when('/add', {
        templateUrl: 'templates/add.html',
        controller: 'addTodoCtrl'
    }).when('/edit/:id', {
        templateUrl: 'templates/edit.html',
        controller: 'editTodoCtrl'
    }).otherwise({
        templateUrl: 'templates/main.html',
        controller: 'todoCtrl'
    });
}]);