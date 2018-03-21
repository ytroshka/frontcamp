app.controller('todoCtrl',
  ['$scope', 'TodoFactory',
    function ($scope, TodoFactory) {
      $scope.todos = TodoFactory.getTodos();

      $scope.deleteTodo = index => {
        TodoFactory.deleteTodo(index);
      };

      /**COMPLETED FILTER**/

      $scope.filterParameter = '';

      $scope.setFilterParameter = param => {
        $scope.filterParameter = param;
      };

      /**SORT FILTER**/

      $scope.propertyName = '';
      $scope.reverse = false;

      $scope.sortBy = propertyName => {
        $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
      };

      /**DATE FILTER**/

      $scope.datePeriod = 0;

      $scope.setDatePeriod = datePeriod => {
        $scope.datePeriod = datePeriod;
      };

      const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;

      $scope.dateOptions = [
        {date: 0, name: 'all'},
        {date: Date.now() - MILLISECONDS_IN_A_DAY, name: 'today'},
        {date: Date.now() - MILLISECONDS_IN_A_DAY * 7, name: 'week'},
        {date: Date.now() - MILLISECONDS_IN_A_DAY * 14, name: '2 weeks'},
      ];
    }
  ]
);