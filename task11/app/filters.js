app.filter('filterByCompleted', () => {
  return (data, filterParameter) => {
    return data.filter(item => {
      if (filterParameter === '') {
        return true;
      } else {
        return item.completed === filterParameter;
      }
    });
  };
});

app.filter('sortBy', ['orderByFilter', orderBy => {
  return (data, propertyName, reverse) => {
    return orderBy(data, propertyName, reverse);
  };
}]);

app.filter('filterByDatePeriod', () => {
  return (data, datePeriod) => {
    return data.filter((item) => {
      return item.date.getTime() - datePeriod >= 0;
    });
  }
});