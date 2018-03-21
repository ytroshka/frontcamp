app.controller('todoCtrl', ['$scope', 'TodoFactory', function ($scope, TodoFactory) {

    const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;

    $scope.todos = TodoFactory.getTodos();

    /*
    const jsonResource = $resource('./data/todos.json');
    jsonResource.query({}, function (response) {
        $scope.todos = response;
        $scope.todos.map(function (todo) {
            todo.date = new Date(todo.date);
            return todo;
        })
    });*/

    $scope.filterParameter = '';

    $scope.deleteTodo = function (index) {
        TodoFactory.deleteTodo(index);
    };

    $scope.datePeriod = 0;

    $scope.setDatePeriod = function (datePeriod) {
        $scope.datePeriod = datePeriod;
    };


    $scope.filterByDatePeriod = function () {
        return function (item) {
            return item.date.getTime() - $scope.datePeriod >= 0;
        }
    };


    $scope.dateOptions = [
        {date: 0, name: 'all'},
        {date: Date.now() - MILLISECONDS_IN_A_DAY, name: 'today'},
        {date: Date.now() - MILLISECONDS_IN_A_DAY * 7, name: 'week'},
        {date: Date.now() - MILLISECONDS_IN_A_DAY * 14, name: '2 weeks'},
    ];
}]);