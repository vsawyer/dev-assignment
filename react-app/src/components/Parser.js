export const groupBy = (array, key) => {
    return array.reduce((accumulator, object) => {
        const property = object[key];
        accumulator[property] = accumulator[property] || [];
        accumulator[property].push(object);
        return accumulator;
    }, {});
  };