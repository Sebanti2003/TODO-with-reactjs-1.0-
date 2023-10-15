// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Props from './Props'

// function App() {
//   const array=[
//     {name:"Sebanti Dasgupta",age:18},
//     {name:"Ronit Roy",age:58},
//     {name:"Suvrodeep Das",age:45},
//     {name:"Sebanti Dasgupta",age:18},
//     {name:"Ronit Roy",age:58},
//     {name:"Suvrodeep Das",age:45},
//     {name:"Sebanti Dasgupta",age:18},
//     {name:"Ronit Roy",age:58},
//     {name:"Suvrodeep Das",age:45},
//     {name:"Sebanti Dasgupta",age:18},
//     {name:"Ronit Roy",age:58},
//     {name:"Sebanti Dasgupta",age:18},
//     {name:"Ronit Roy",age:58},
//     {name:"Suvrodeep Das",age:45},
//     {name:"Sebanti Dasgupta",age:18},
//     {name:"Ronit Roy",age:58},
//     {name:"Suvrodeep Das",age:45},
//   ];
//   const [nameinput,setnameinput]=useState('');
//   const[numberinput,setnumberinput]=useState(0);

//   function addnew(){
//    const obj={};
//    obj.name=nameinput;
//    obj.age=numberinput;
//    array.push(obj);
   
   
//   }

//   return (
//    <>

//    <div  className='w-fit h-fit bg-blue-300'>
//    <input type="text" className='input' onChange={(e)=>setnameinput(e.target.value)} />
//    <input type="number" name="age" id="age" onChange={(e)=>setnumberinput(e.target.value)} />
//    <button onClick={addnew} className='text-white bg-blue-600 px-10'>Plus</button>
//    <div className='w-[100vw] h-fit bg-blue-300 p-5 flex justify-center  flex-wrap'>
//    {array.map((element,key)=>(
//     <Props name={element.name} age={element.age} />
//    ))}


//    </div>
//    </div>
   
//    </>
//   )
// }

// export default App
import React, { useState } from 'react';
import Props from './Props';

function App() {
  const [array, setArray] = useState([
    // { name: "Sebanti Dasgupta", age: 18 },
    // {name:"Ronit Roy",age:58},
    // {name:"Suvrodeep Das",age:45},
    // // ... (other initial data)
  ]);

  const [nameInput, setNameInput] = useState('');
  const [task, settask] = useState('');

  const addNew = () => {
    // Create a new object and update the state using the current array
    setArray((prevArray) => [
      ...prevArray,
      { name: nameInput, age: task },
    ]);

    // Reset the input fields
    setNameInput('');
    settask('');
  };
  return (
    <>
    <div className='flex w-screen flex-col bg-blue-500 min-h-screen justify-center items-center overflow-y-scroll'>
    <div className='max-sm:h-[50%] max-sm:w-[90%] w-[90vw]  flex flex-col justify-between items-center bg-blue-300 rounded-tr-lg rounded-tl-lg'>
     <h1 className='font-mono font-extrabold text-xl underline'>To do App</h1>
     <div className='flex'>
     <label htmlFor="namee">Enter your name:</label>
     <input
          type="text"
          className='input'
          name='namee'
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          />
     </div>
     <div className='flex'>
     <label  htmlFor="age"> Enter your Task:</label>
     <input
          type="text"
          name="age"
          id="age"
          value={task}
          onChange={(e) => settask(e.target.value)}
        />
     </div>
     <button className='text-white bg-blue-600 px-10 w-[30%] rounded-md h-[20%]' onClick={addNew}>PLUS</button>

    </div> 
      <div className='w-[90vw] mx-auto h-fit bg-blue-300 rounded-br-lg rounded-bl-lg'>
        <div className='w-[80%] h-[100%] bg-blue-300 p-5 flex rounded-br-lg rounded-bl-lg justify-center flex-wrap'>
          {array.map((element, key) => (
            <Props name={element.name} age={element.age} key={key} />
          ))}
        </div>
      </div>
    </div>
   
    </>
  );
}


export default App;
