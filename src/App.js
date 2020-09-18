import React, {useState} from 'react';
import './App.css'; 
import UserInput from './Components/UserInput/UserInput';
import UserOutPut from './Components/UserOutPut/UserOutPut'; 

function App() { 
    const [UserName , setUserName] = useState('Luis'); 

    return (
        <div className="App">
            <h3 id='App-Title'>First Assigment</h3> 
            <UserInput value={UserName} onChange={(event) => setUserName(event.target.value)}/> 
            <UserOutPut UserName={UserName}/>
            <UserOutPut UserName={UserName}/>
        </div>
    );
}

export default App;
