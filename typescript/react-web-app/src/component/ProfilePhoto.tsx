import { Card } from "react-bootstrap"
import { user } from "./UserList";

const ProfilePhoto=(props:{data:string})=>{
return(
    <>
    <Card >
      <Card.Img variant="top" src={props.avatar_url}/>
      </Card>
    </>
);

}
export default ProfilePhoto;