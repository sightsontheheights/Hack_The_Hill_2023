import React, { useState, useEffect } from "react";
import Result from "./Result";
import axios from "axios";

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
     <input
       type="text"
       id="message"
       name="message"
       onChange={handleChange}
       value={message}
     />

     <button onClick={handleClick}>Update</button>

     <Result results={results}/>
   </div>
 );
};




export default Input;
