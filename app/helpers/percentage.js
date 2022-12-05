import { helper } from '@ember/component/helper';

const stringifyPercentage = (number) => `%${number}`;

export default helper(function percentage([amount, total], { stringify }) {
  const percent = ((amount * 100) / Math.max(total, 1)).toFixed(2);
  return stringify ? stringifyPercentage(percent) : percent;
});
