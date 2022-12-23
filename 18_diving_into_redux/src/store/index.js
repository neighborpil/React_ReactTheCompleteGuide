import redux, {createStore} from 'redux';
import counter from "../components/Counter";

// export const INCREMENT = 'increment';

const initialState = {counter: 0, showCounter: true};

const counterReducer = (state = initialState, action) => {
    // if (action.type === INCREMENT) {
    if (action.type === 'increment') {
        // state.counter++; <= 이와같이 현재의 state를 변경시켜서는 안된다. 항상 새로운 state를 반환해야 한다
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        }
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        };
    }

    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state;
};

const store = createStore(counterReducer);

export default store;