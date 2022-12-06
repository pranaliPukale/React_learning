import { Routes, Route } from 'react-router-dom'; 
import NoFile from './component/NoFile1';
import UserDetails from './component/UserDetails';
import {user} from './component/UserList';
import UserProfile from './component/UserProfile';
const WebRoute1=()=>{
    return(
        <Routes>
            {/* <Route path='/UserDetails/:id' element={<UserDetails />}/> */}
        </Routes>
    );
}
 export default WebRoute1;