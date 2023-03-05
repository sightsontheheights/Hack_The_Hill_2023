import { FcHighPriority } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";
import { FcDecision } from "react-icons/fc";


import React from "react";

const Flag = ({prop}) => {
  //console.log(logo);
  if(prop=="1"){

  
  return (
    <FcHighPriority></FcHighPriority>
  );
  
}
    else if(prop=='2'){
        
    return (
        <FcCheckmark></FcCheckmark>
    );

    }

    else{
        return (  
        <FcDecision></FcDecision> 
        );
    }
}

export default Flag;