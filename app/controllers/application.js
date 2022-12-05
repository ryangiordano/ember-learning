import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';

class ApplicationController extends Controller {
  @service store;

  setField = (propertyName, e) => {
    this.set(propertyName, e.target.value);
  };
  setIsExpense = (e) => {
    this.set('isExpense', e.target.checked);
  };
  description = 'Some description';
  date = new Date();
  amount = 0.0;
  isExpense = false;

  @computed('model.[]')
  get totalAmount() {
    console.log(this.model);
    return this.model.reduce(
      (acc, lineItem) => (acc += Number(lineItem.amount)),
      0
    );
  }

  @action
  addNewLineItem() {
    const lineItem = this.store.createRecord('line-item', {
      description: this.description,
      date: new Date(this.date),
      amount: this.amount,
      isExpense: this.isExpense,
    });
    lineItem.save();
    this.setProperties({
      description: '',
      date: new Date(),
      amount: 0,
      isExpense: true,
    });
  }

  @action
  deleteLineItem(lineItem) {
    lineItem.destroyRecord();
  }
}

export default ApplicationController;
