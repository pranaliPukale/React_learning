import { getUserListStarted,getUserListSuccess,getUserListFailure } from "./userAction";
import { Api } from "./actionType"; 
import { fetchUserApi } from "../reducer/userReducer";

// GET for UserList
export const getUserList=()=>
{
     async(dispatch:(arg0: { type: string; payload?: any; })=> void)=>
    {
        dispatch(getUserListStarted());
        try
        {
            const res=await fetch(Api.user);
            const data:fetchUserApi=await res.json();
            dispatch(getUserListSuccess(data));
        }
        catch(err)
        {
          dispatch(getUserListFailure(err));
        }
    }
}
