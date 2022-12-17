export const AddUser=()=>{
    fetch('https://reqres.in/api/users',{
        method:'POST',
        headers:{
                  "Content-Type": "application/json",
                  "Accept": "application/json"   
                },
        // body:{}
      }).then(response=>response.json())
    return<></>
}