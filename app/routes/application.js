import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return this.get('store').findAll('line-item');
  }
}
