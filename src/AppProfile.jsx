import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
import Profile from './components/Profile';
import Avatar from './components/Avatar';


function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert('버튼이 클릭되어짐'); 

  }
  return (
    <>
      {/* <Avatar
      image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
      isNew={true}
      /> */}
      {/* <button onClick={handleClick}>버튼</button> */}
          
      <Profile
        image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
        name='James Kim'
        title='프론트엔드 개발자'
        isNew={true}
        />

      <Profile
        image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        name='shine'
        title="백엔트 개발자"
        
        />
        

    </>
  )
}

export default AppProfile;