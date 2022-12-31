import { GET_USER_LIST_FAILURE,GET_USER_LIST_STARTED,GET_USER_LIST_SUCCESS } from "./actionType";
import { ADD_UPDATE_USER_LIST_FAILURE,ADD_UPDATE_USER_LIST_STARTED,ADD_UPDATE_USER_LIST_SUCCESS } from "./actionType";
//GET for UserList
export const getUserListStarted=()=>({type:GET_USER_LIST_STARTED});
export const getUserListSuccess=(data:any)=>({type:GET_USER_LIST_SUCCESS,payload:data});
export const getUserListFailure=(error:any)=>({type:GET_USER_LIST_FAILURE,payload:error});

//Add or Update for UserList
 export const addUpdateUserListStarted=()=>({type:ADD_UPDATE_USER_LIST_STARTED});
 export const addUpdateUserListSuccess=(data:any)=>({type:ADD_UPDATE_USER_LIST_SUCCESS,payload:data}); 
 export const addUpdateUserListFailure=(error:any)=>({type:ADD_UPDATE_USER_LIST_FAILURE,payload:error});
 