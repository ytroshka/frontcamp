app.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider
  .when('/add', {
    templateUrl: 'templates/news-form.html',
    controller: 'addNewsCtrl'
  })
  .when('/edit/:id', {
    templateUrl: 'templates/news-form.html',
    controller: 'editNewsCtrl'
  })
  .otherwise({
    templateUrl: 'templates/main.html',
    controller: 'newsCtrl'
  });
}]);