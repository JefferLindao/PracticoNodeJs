const nanoid = require('nanoid');
const TABLA = 'user';

module.exports = function (injectedStore) {
  let store = injectedStore
  if (!store) {
    store = require('../../store/dummy');
  }

  function list() {
    return store.list(TABLA);
  }

  function get(id) {
    return store.get(TABLA, id);
  }

  function upsed(body) {
    const user = {
      name: body.name
    }
    if (body.id) {
      user.id = nanoid();
    }
    return store.upsed(TABLA, user)
  }

  return {
    list,
    get,
    upsed
  }
}
