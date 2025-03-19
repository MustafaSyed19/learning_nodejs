const _ = require('lodash'); 

const items = [1,[2,[3,[4]]]]
let newItems = _.flatMapDeep(items)
console.log(newItems);
