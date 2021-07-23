import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

let Store = null;

export const saveStore = (createStore, composeEnhancers) => {
  Store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(ReduxThunk))
  );
};

export const getStore = () => Store;