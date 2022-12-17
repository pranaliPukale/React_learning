import { Routes, Route } from "react-router-dom";
import LoginForm from "./Component/LoginForm";
import { UserDetails } from "./Component/UserDetails";
import UserForm from "./Component/UserForm";
import { UserList } from "./Component/UserList";

const WebRoute=()=>{
    return(
        <Routes>
            <Route path="/login" element={<LoginForm/>} />
           <Route  path="/User" element={<UserForm/>}></Route>  
           <Route path="/User-List" element={<UserList />}  ></Route>
           <Route path="/user-detail/:id" element={<UserDetails />}  ></Route>    
        </Routes>
    );
}
 export default WebRoute;