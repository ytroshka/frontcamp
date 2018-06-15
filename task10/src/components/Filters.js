import React from 'react';
import FilterLink from '../containers/FilterLink';
import {VisibilityFilters} from '../actions';

const Filters = () => (
    <div>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_NEW}>New</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
);

export default Filters;
