import { getUserListStarted,getUserListSuccess,getUserListFailure } from "./userAction";
import { Api } from "./actionType"; 
import { fetchUserApi } from "../reducer/userReducer";
import { addUpdateUserListStarted,addUpdateUserListFailure,addUpdateUserListSuccess } from "./userAction";
import { ModalBody } from "react-bootstrap";
import { json } from "stream/consumers";

// GET for UserList
export const getUserList=()=>
{
    return (async(dispatch:(arg0: { type: string; payload?: any; })=> void)=>
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
    );
}

//Add or Update UserList
export const addUpdateUserList=(formObj:{name:string,job:string,id?:number},method:string)=>
{
    return (async(dispatch:(arg0: { type: string; payload?: any; })=> void)=>
    {
      dispatch(addUpdateUserListStarted());
      const apiUrl=(method=="PUT" ? `${Api.user}/${formObj.id}` :Api.user);
      let response=await fetch(apiUrl,{
                           method:method,
                           body:JSON.stringify({
                             name:formObj.name,
                             job:formObj.job
                              }),
                           headers: {'Content-type': 'application/json; charset=UTF-8',
                                  },
                          });
      var data=await response.json();
       if (response.ok)
         dispatch(addUpdateUserListSuccess(data));
       else
         dispatch(addUpdateUserListFailure('something going wrong'))
      
    });
}