import { module, test } from 'qunit';
import { setupTest } from 'ember-learning/tests/helpers';

module('Unit | Model | line item', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('line-item', {});
    assert.ok(model);
  });
});
