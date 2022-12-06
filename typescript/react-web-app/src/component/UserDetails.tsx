import { Link, useParams } from 'react-router-dom';
import {user as user1} from './UserList';
import users from '../data/user.json';
import UserProfile from './UserProfile';
const UserDetails=()=>{
    const {id} = useParams();
    let user:user1|undefined;
    if(id)
    {
        user =users.find(use=>use.id===parseInt(id));
    }
    console.log(user?.login);
    return(
    user! && <div><UserProfile {...user}  key={id}/></div>   );
    
}
export default UserDetails;