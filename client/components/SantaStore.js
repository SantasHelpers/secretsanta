// MOBX store
// SantaStore.js
import { autorun, extendObservable } from 'mobx';
import data from '../appData';
import groupData from '../../fakeGroupData';

class SantaStore {

  constructor () {
    extendObservable(this, {
      wishListData: data,
      groupData: groupData
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