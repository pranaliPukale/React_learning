import { Routes, Route } from "react-router-dom";
import LoginForm from "./Component/LoginForm";
import NavComponent from "./Component/NavComponent";
import UserForm from "./Component/UserForm";

const WebRoute=()=>{
    return(
        <Routes>
            <Route path="/login" element={<LoginForm/>} />
           <Route  path="/User" element={<UserForm/>}></Route>
           
        </Routes>
    );
}
 export default WebRoute;