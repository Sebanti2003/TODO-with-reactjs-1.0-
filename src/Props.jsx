import React, { useState } from 'react';

function Props(props) {
 const [remove,setRemove]=useState(false);

 const handleRemove=()=>{
  setRemove(true);
 }
 if(remove){
  return null;
}

  return (
    <div className='w-52 h-52 max-h-fit bg-white rounded-lg flex flex-col justify-around items-center m-2 border-[1px] border-black'>
      <h1 className='font-extrabold'>{props.name}</h1>
      <p className='font-semibold mx-2'>{props.age}</p>
      <button className='bg-blue-500 text-white text-center p-1 w-[80%] rounded-lg' onClick={handleRemove}>Remove</button>
    </div>
  );
}

export default Props;