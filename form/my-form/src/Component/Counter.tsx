import { useDispatch, useSelector } from "react-redux";
import { counterType } from "../reducer/counterReducer";
import {setIncrementCounter,setDecrementCounter,setCounterTitle,resetCounter} from '../action/counterAction';
import { Button } from "react-bootstrap";
import { RootState } from "..";
export const Counter = ()=>{
    const dispatch = useDispatch();
    const counterState = useSelector<RootState,counterType>((state)=>state.counter);
    return <> 
          <h2>{counterState.counterTitle} ({counterState.counter})</h2>
          <Button className="m-2" onClick={()=>dispatch(setIncrementCounter())}>+1</Button>
          <Button className="m-2" onClick={()=>dispatch(setDecrementCounter())}>-1</Button>
          <Button className="m-2" onClick={()=>dispatch(resetCounter())}>Reset Counter</Button>
    </>;
}