import { module, test } from 'qunit';
import { setupTest } from 'ember-learning/tests/helpers';

module('Unit | Adapter | line item', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:line-item');
    assert.ok(adapter);
  });
});
