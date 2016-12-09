// MOBX store
// SantaStore.js
import { autorun, extendObservable } from 'mobx';

class SantaStore {

 // @observable users;
 // @observable groups;

  constructor () {
    extendObservable(this, {
      users: ['Phil', 'Tyler', 'Joos', 'Chan'],
      groups: ['HR50', 'Family', 'Friends']
    })
    // this.users = ;
    // this.groups =  ;
  }
 // MOBX mutates state directly in the store
 // good resource  http://www.robinwieruch.de/mobx-react/

}

const store = window.store = new SantaStore();
export default store;
export {SantaStore};

// autorun(() => {
//   console.log(store.filter);
//   console.log(store.users[0]);
// })