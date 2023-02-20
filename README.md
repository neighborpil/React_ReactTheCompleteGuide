# React_ReactTheCompleteGuide

### Instructor hp
 - https://github.com/academind/react-complete-guide-code/tree/03-react-basics-working-with-components

### installing sylted-components
```
% npm install --save styled-components
```

### Instructor Github
 - https://github.com/academind/react-complete-guide-code


### HTTP api 
 - swapi.dev

### Formik
 - 폼 라이브러리

### nodejs start and redux
```
% npm init -y
% npm install redux
% node redux-demo.js
```

 - redux sample code
```
const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) => {

    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        };
    }

    return state;
};

const store = redux.createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});


```

### Installing redux on react app
```
% npm install redux react-redux

```

### Installing redux toolkit
```
% npm install @reduxjs/toolkit

or

% yarn add @reduxjs/toolkit
```

### Installing React Router
```
% npm install react-router-dom
```


### How to make next-js app
```
% npx create-next-app

% yarn create next-app
```
