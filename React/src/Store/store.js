import {createStore} from 'redux';
import {appReduser} from './reducers';

export const storCreator = () =>{
const  store = createStore(appReduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
return store;
}