import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {

  const [name, setName] = useState("first isssss");


  const updatefunc=(nameArg)=>{
    setName(nameArg)
  }


  return <div>
    <>
    <h1>{name}</h1>
    <Child updatefunc={updatefunc}/>
    </>
    
  </div>;
};

export default Parent;
