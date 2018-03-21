app.factory('TodoFactory', ['$resource', ($resource) => {
  let todos = [];

  $resource('./data/todos.json').query({}, response => {
    todos = response.map(todo => {
      todo.date = new Date(todo.date);
      return todo;
    });
  });

  return {
    getTodos: () => {
      return todos;
    },

    addTodo: name => {
      todos.push({
        name: name,
        date: new Date(),
        completed: false,
        id: Date.now()
      });
    },

    deleteTodo: index => {
      todos.splice(index, 1);
    },

    saveTodo: (index, todo) => {
      todos[index] = todo;
    }
  };
}]);
