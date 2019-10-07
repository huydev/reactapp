import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootStore from './reducers';

let store = createStore(rootStore, applyMiddleware(ReduxThunk));

export default store;

