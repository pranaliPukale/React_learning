import { Routes, Route } from 'react-router-dom'; 
import NoFile from './component/NoFile1';
import UserDetails from './component/UserDetails';
import UserList from './component/UserList';

const WebRoute=()=>{
    return(
        <Routes>
           <Route path='/UserList' element={<UserList/>}></Route>
           <Route path='/UserDetails/:id' element={<UserDetails />}/>
        </Routes>
    );
}
 export default WebRoute;