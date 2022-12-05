import Controller from '@ember/controller';
// import Component from '@glimmer/component';
import Ember from 'ember';
import { action, computed } from '@ember/object';

const LineItem = Ember.Object.extend({
  description: 'Description',
  date: new Date(),
  amount: 0,
  isExpense: true,
});

class ApplicationController extends Controller {
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
  welcomeText = 'Welcome guys';
  lineItems = [
    LineItem.create({
      description: 'breakfast',
      date: new Date('11-02-2022'),
      amount: 10,
      isExpense: true,
    }),
    LineItem.create({
      description: 'lunch',
      date: new Date('11-03-2022'),
      amount: 15,
      isExpense: true,
    }),
    LineItem.create({
      description: 'dinner',
      date: new Date('11-04-2022'),
      amount: 50,
      isExpense: true,
    }),
    LineItem.create({
      description: 'salary',
      date: new Date('11-05-2022'),
      amount: 5000,
      isExpense: false,
    }),
  ];

  @computed('lineItems.[]')
  get totalAmount() {
    console;
    return this.lineItems.reduce(
      (acc, lineItem) => (acc += Number(lineItem.amount)),
      0
    );
  }

  @action
  addNewLineItem() {
    const lineItem = LineItem.create({
      description: this.description,
      date: this.date,
      amount: this.amount,
      isExpense: this.isExpense,
    });

    this.lineItems.pushObject(lineItem);
    this.setProperties({
      description: '',
      date: new Date(),
      amount: 0,
      isExpense: true,
    });
  }
}

export default ApplicationController;
