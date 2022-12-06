import user from "../user.png";
const LeftComponent=()=>{
 return(
   
    <div className="row">
      <div className="col-3 pt-3"> 
        <h5 className='new ms-5'>*MY PROFILE*</h5> 
        <div className="card "  >
        <img src={user} className="card-img-top" alt="My Photo"/>
        <div className="card-body">
        <div className="card-text">
           <h6><b>ABOUT ME:</b></h6> 
          <h6><b>Name:</b>Pranali Pukale.</h6>
          <h6><b>Course:</b>MSC</h6>   
          <h6><b>PassOut Year:</b>2022</h6>
        </div>
        </div>
        </div>
      </div>
    </div>
 );
}
export default LeftComponent;