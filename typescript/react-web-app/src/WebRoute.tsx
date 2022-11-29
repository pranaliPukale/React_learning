import { Routes, Route } from 'react-router-dom'; 
import NoFile from './component/NoFile1';
const WebRoute=()=>{
    return(
        <Routes>
            <Route path='*' element={<NoFile/>}/>
        </Routes>
    );
}
 export default WebRoute;