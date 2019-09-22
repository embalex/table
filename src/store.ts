import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

export default function configureStore() {
  return createStore(
    reducers,
    applyMiddleware(reduxThunk),
  );
};
