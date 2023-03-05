import React, { useState, useEffect } from "react";
import axios from "axios";

const Input = () => {
 const [message, setMessage] = useState('');

 const [updated, setUpdated] = useState(message);

 const handleChange = (event) => {
   setMessage(event.target.value);
 };

  //   useEffect(() => {
  //     axios.post('https://localhost:3005/submit', null, {
  //       result: message
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //         // Handle data
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     }, []);

  const handleClick = async (event)=> {
    event.preventDefault(); // prevent page reload
    setUpdated(message);
    const serverData = {
      result: message,
    };
    axios.post("http://localhost:3005/submit", serverData).then((response) => {
      console.log(response);
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
   </div>
 );
};




export default Input;
