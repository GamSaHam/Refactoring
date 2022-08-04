import { getDefaultOwner } from './6-6.js';

const owner = getDefaultOwner();
// owner.firstName = '엘리'; // Setter 항목이 없으므로 에러발생
console.log(owner.firstName)
console.log(getDefaultOwner());
