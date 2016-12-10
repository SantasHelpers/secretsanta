// MOBX store
// SantaStore.js
import { autorun, extendObservable } from 'mobx';

class SantaStore {

  constructor () {
    extendObservable(this, {
      images: [ 'http://www.bodybuilding.com/images/2016/july/train-like-dwayne-the-rock-johnson-bigshot-v2-830x467.jpg', 
                'http://static1.gamespot.com/uploads/original/1179/11799911/2877070-jason.jpg', 
                'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/main-how-to-build-shoulders-like-vin-diesel.jpg',
                'http://www.pwpix.net/wp/wp-content/uploads/2015/04/john-cena-28361725-620x400.jpg'],
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