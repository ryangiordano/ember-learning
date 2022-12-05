import Model, { attr } from '@ember-data/model';

export default class LineItemModel extends Model {
  @attr('string', { defaultValue: '' }) description;
  @attr('date', { defaultValue: new Date() }) date;
  @attr('number', { defaultValue: 0 }) amount;
  @attr('boolean', { defaultValue: true }) isExpense;
}
