import { totalmem } from "os";
import { GET_USER_LIST_STARTED,GET_USER_LIST_SUCCESS,GET_USER_LIST_FAILURE } from "../action/actionType";
const initialStateUser = {
    user_res:{
          page:1,
          per_page:0,
          total:0,
          total_pages:0,
          data:[],
        },
    loading: false,
    error:null
};

//GET for UserList
export interface fetchUserApi{
 user_res:{
        page:number,
        per_page:number,
        total:number,
        total_pages:number,
        data:userType[]},
 loading:boolean,
 error:any
}
export interface userType{
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}
export const user= (state=initialStateUser,action:{ type: any ; payload:any})=>
{
    switch(action.type)
    {
        case GET_USER_LIST_STARTED:
            return{...state,loading:true};
        case GET_USER_LIST_SUCCESS:
            const data=action.payload;
            return{...state,user_res:data,loading:false};
        case GET_USER_LIST_FAILURE:
            const error = action.payload.error;
            return{...state,error:error,loading:false};
        default:
            return state;            
    }
}