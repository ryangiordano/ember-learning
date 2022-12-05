import { Factory } from 'miragejs';

export default Factory.extend({
  description(i) {
    return `Test description ${i}`;
  },
  date(i) {
    return new Date();
  },
  amount(i) {
    return i * 1.5;
  },
  isExpense(i) {
    return !!i % 2;
  },
});
