import { GET_USER_LIST_STARTED,GET_USER_LIST_SUCCESS,GET_USER_LIST_FAILURE } from "../action/actionType";
const initialStateUser = {
    data:[],
    loading: false,
    error:null
};

//GET for UserList
export interface fetchUserApi
{
 data:userType[]|undefined,
 loading:boolean,
 error:any
}
export interface userType
{
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
            return{...state,loading:false};
        case GET_USER_LIST_FAILURE:
            const error = action.payload.error;
            return{...state,error:error,loading:false};
        default:
            return state;            
    }
}