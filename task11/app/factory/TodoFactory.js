app.factory('TodoFactory', function () {
    const todos = [
        {
            "name": "test1",
            "date": 1521163587000,
            "completed": false,
            "id": 1
        },
        {
            "name": "test2",
            "date": 1520990787000,
            "completed": true,
            "id": 2
        },
        {
            "name": "test3",
            "date": 1520880787000,
            "completed": false,
            "id": 3
        }
    ];

    return {
        getTodos: function () {
            return todos;
        },
        addTodo: function (name) {
            todos.push({
                name: name,
                date: new Date(),
                completed: false,
                id: Date.now()
            });
        },
        deleteTodo: function (index) {
            todos.splice(index, 1);
        }
    };
});
