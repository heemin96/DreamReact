import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';


function AppJSX() {
  const name="엘리";
  const list = ['우유', '딸기', '바나나'];

  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <ul>
        {
          list.map((item)=> (
          <li>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default AppJSX;


{/* // import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import { useState } from 'react';
// import { useRef } from 'react';
// import CreateUser from './CreateUser';
// import UserList from './UserList';


// function App() { */}

{/* //   const [inputs, setInputs] = useState({ */}
//     username:'',
//     email:'',
//     active:''
//   });

//   const {username, email} = inputs;

//   const onChange = e => {
//     const {name,value} = e.target;
//     setInputs({
//       ...inputs,
//       [name]: value
//     });
//     console.log(inputs);
//   };


//   const onRemove = id =>{
//     setUsers(users.filter(user => user.id !==id))
//   };

//   const onToggle = id =>{
//     setUsers(users.map(user=>
//       user.id === id ? {...user, active: !user.active} :user))
//   };

//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       username:'hanbit',
//       email:'hanbit@example.com',
//       active: true
//     },

//     {
//       id: 2,
//       username:'heemin',
//       email:'heemin@example.com',
//       active : true
//     },
//     {
//       id: 3,
//       username:'changnee',
//       email:'changnee@example.com',
//       active: false
//     }
//   ]);

//   const nextId =useRef(4);

//   const onCreate = () => {
//     const user = {
//       id: nextId.current,
//       username,
//       email
//     };
//     // setUsers(users.concat(user));
//     setUsers([...users,user]);

//     setInputs({
//       username:'',
//       email:''
//     });
//     nextId.current += 1;
//   };
  


//   return (
//     <>
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       /> 
      
//       <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
//     </>
//   )
// }

// export default App;
