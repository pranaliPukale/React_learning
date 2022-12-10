import { Routes, Route } from "react-router-dom";
import UserForm from "./Component/UserForm";

const WebRoute=()=>{
    return(
        <Routes>
           <Route  path="/User" element={<UserForm/>}></Route>
        </Routes>
    );
}
 export default WebRoute;