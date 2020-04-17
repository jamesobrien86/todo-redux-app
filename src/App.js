import React from 'react'
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { TodoList } from './containers';
import reducer from './reducer';


const store = createStore(reducer);
console.log(store, "store")

const dummyTodos = [
  { id: 0, isDone: true,  text: 'make components' },
  { id: 1, isDone: false, text: 'design actions' },
  { id: 2, isDone: false, text: 'implement reducer' },
  { id: 3, isDone: false, text: 'connect components' }
];

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>
  , 
    document.getElementById('app')
  );

