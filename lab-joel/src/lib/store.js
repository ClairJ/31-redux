import {createStore} from 'redux';
import reducer from '../reducers/category.js';

export default () => createStore(reducer);
