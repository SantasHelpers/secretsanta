// MOBX store
// SantaStore.js
import { autorun, observable } from 'mobx';

class SantaStore {

  @observable users;
  //@observable groups;

  constructor () {
    this.users = ['Phil', 'Tyler', 'Joos', 'Chan'];
    this.groups =  ['HR50', 'Family', 'Friends'];
  }

}

const store = window.store = new SantaStore();
export default store;
export {SantaStore};

// autorun(() => {
//   console.log(store.filter);
//   console.log(store.users[0]);
// })