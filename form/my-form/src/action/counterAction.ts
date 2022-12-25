import { INCREMENT, DECREMENT, RESET, SET_COUNTER_TITLE} from "./actionType";

    export const setIncrementCounter =()=>({type:INCREMENT});
    export const setDecrementCounter =()=>({type:DECREMENT});
    export const setCounterTitle =(text:string)=>({payload:test,type:SET_COUNTER_TITLE});
    export const resetCounter = () => ({type:RESET});