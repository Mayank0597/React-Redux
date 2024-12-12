const redux = require('redux');

const reducer = (store,action)=>{
return store; 
}

const store = redux.createStore();

const subscriber = ()=>{
  const state = store.getState();
  console.log(state);
  
}

store.subscribe(subscriber);

store.dispatch({type:})