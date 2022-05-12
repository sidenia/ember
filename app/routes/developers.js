import Route from '@ember/routing/route';

export default class DevelopersRoute extends Route {
  model() {
    return ['@iuricode', '@biacodes', '@victoreloy.dev'];
  }
}
