import React, { useEffect, useState } from "react";

const FetchAPIExample = () => {
    const [users, setUsers] = useState("");

    useEffect(()=> {
       
    })

    const getUserList=()=> {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then((data) =>{ console.log(data);
        setUsers(data)});
    }
    
    return (
        <>
        <button onClick={()=> getUserList()}>get users data</button>

     
       
        
          

            <table border={1}>
            {/* <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr> */}
           
            {users && users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </table>
              
       </>
    );
}

export default FetchAPIExample;


