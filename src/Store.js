import {createStore} from 'redux';
const initialState={count:0};

const counterReducer=(state=initialState,action)=>{
    switch(action.type){
        case "increment":return {count:state.count+2}
        case "decrement":return {count:state.count-2}
        default :return state;
    }
}

export const store=createStore(counterReducer);