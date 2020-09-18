import React from 'react'; 
import './UserOutPut.css';

const UserOutPut = ( props ) => {
    return(
        <div className='User-Information-Container'>
            <p id='UserName-Layout'>
                UserName: {props.UserName}
            </p>
            <p>
                I hope that works
            </p>
        </div>
    ); 
} 

export default UserOutPut; 