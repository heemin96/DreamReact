import React from "react"
import Avatar from "./Avatar"


export default function Profile({image, name, title, isNew}) { //전달 받고자 하는 key를 명시 해주는거임
  
    
    return (
        <div className="profile">
            <Avatar image={image} isNew={isNew}/>
            <h1>{name}</h1>
            <p>{title}</p>

        </div>
    )
}

