import {createStore} from 'redux';
import {persistStore} from 'redux-persist';
import rootReducer from './reducers';

export default StoreConfig = () => {
  let store = createStore(rootReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};
