
export const CartModel = (props:{sizes:string[],id1:string}) => {
   
   console.log(props.sizes+"======="+props.id1);
    return (
        
        <div className="modal" id={props.id1} >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">                      
                        <h5 className="modal-title">Add to Cart</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body"></div>
                    <form className="row g-3 needs-validation" >
                     
                    
                        <div className="form-group px-3">
                            <label>Email</label>
                        <div className="input-group flex-nowrap">
                             <span className="input-group-text" id="addon-wrapping"></span>
                             <input type="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                        <br></br>
                        <label>Password</label>
                        <div className="input-group flex-nowrap">
                             <span className="input-group-text" id="addon-wrapping"></span>
                             <input type="Password" className="form-control" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                        <br></br>                          
                            <select className="form-select" >
                                <option >Select Quantity</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                                <option value="5">Five</option>
                            </select>
                          </div>                          
                        <div className="form-group px-3">                          
                            <label>Select Size</label><br />
                            {props.sizes.map((availableSizes)=>
                           
                             <div className="form-check form-check-inline"  key={availableSizes} >
                                <input className="form-check-input" type="radio" name="size" value={availableSizes} />
                                <label className="form-check-label" >{availableSizes}</label>                                          
                            </div>
                            
                            )
                            } 
                            <div className="modal-footer">
                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                             <button type="button" className="btn btn-primary">Checkout</button>
                           </div>                         
                        </div>
                    </form>
                </div>               
            </div>
            </div>
        );
}