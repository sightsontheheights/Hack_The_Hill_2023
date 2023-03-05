import React, { useState, useEffect } from "react";
import Result from "./Result";
import axios from "axios";
import { FcRightUp2 } from 'react-icons/fc';


const Input = () => {
 const [message, setMessage] = useState('');
 const [updated, setUpdated] = useState(message);
 const [results, setResults] = useState(" ");

 const handleChange = (event) => {
   setMessage(event.target.value);
 };

  const handleClick = async (event)=> {
    event.preventDefault(); // prevent page reload
    setUpdated(message);
    const serverData = {
      result: message,
    };
    await axios.post("http://localhost:3005/submit", serverData).then((response) => {
      console.log(response);
      setResults(response.data.result);
    });
  };

 return (
   <div>
<textarea
                className='emailInput'
                type='text'
                id='message'
                name='message'
                placeholder='Insert email body...'
                onChange={handleChange}
                value={message}
            />
            <a onClick={handleClick}>
                <div className='buttonStyle' id='uploadBtn'>
                    <FcRightUp2 style={{ marginTop: 20 }} />{' '}
                    <span>Upload</span>
                </div>
            </a>
            <br></br>
     <Result results={results}/>
   </div>
 );
};




export default Input;
