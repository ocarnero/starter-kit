import '../client/index.css';
import '../client/index.scss';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`test ${courseValue}`);