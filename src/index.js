import _ from 'lodash';

import sayHello from './hello';

const a = _.ceil(1.4234242, 2);
console.log(a);

console.log(sayHello());
console.log(sayHello('Universe'));
