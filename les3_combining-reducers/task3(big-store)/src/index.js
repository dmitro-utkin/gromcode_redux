import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions.js';
import { setUser, removeUser } from './user.actions';

// Subscribe to store changes
store.subscribe(() => {
  console.log('Store updated:', store.getState());
});
// Dispatch actions
store.dispatch(setLanguage('es'));
store.dispatch(addProduct({ id: 1, name: 'apple' }));
store.dispatch(addProduct({ id: 2, name: 'banana' }));
store.dispatch(removeProduct(1));
store.dispatch(setUser({ name: 'Alice' }));
store.dispatch(removeUser());

