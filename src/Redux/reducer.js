import { combineReducers } from 'redux'


const initialAddState = {
    result : 0
}


                                 
const addReducer = ( state = initialAddState , action) =>{
    switch(action.type){
        case 'ADD':
            return{
                ...state,
                result: state.result + action.payload,
            }
            default:
                return state
    }
}


const initialSubtractState = {
    result : 0,
}

const subtractReducer = ( state = initialSubtractState , action )=>{
    switch(action.type){
        case 'SUB':
            return{
                ...state,
                result : state.result - action.payload,
            }
            default:
                return state;
        }
}


const rootReducer = combineReducers({
    add : addReducer,
    sub: subtractReducer,
});


export default rootReducer;
