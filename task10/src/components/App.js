import React from 'react';
import Filters from './Filters';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Filters />
    </div>
);

export default App;
