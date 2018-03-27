app.filter('sortBy', ['orderByFilter', orderBy => {
    return (data, propertyName, reverse) => {
        return orderBy(data, propertyName, reverse);
    };
}]);

app.filter('pagination', () => {
    return(input, start) => {
        return input.slice(+start);
    };
});