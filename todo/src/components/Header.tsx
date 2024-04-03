import React, { useState } from "react";

interface headerProp {
 arr: [string, boolean][];
 setArr: React.Dispatch<React.SetStateAction<[string, boolean][]>>;
}

const Header: React.FC<headerProp> = ({ arr, setArr }) => {
 const [inputVal, setInput] = useState('');

 const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
 };
 const handleAdd = () => {
    // Create a new array with the new todo item added
    // Update the arr state in the parent component
    setArr([...arr, [inputVal as string, false as boolean]]);
    // Clear the input
    setInput('');
};

 return (
    <>
      <h1>TODO react app</h1>
      <div className="flex items-center justify-center w-50 h-6 bg-cyan-200">
        <input type="text" placeholder="enter todo" onChange={handleInputChange} value={inputVal} />
        <button onClick={handleAdd}>Add Todo</button>
      </div>
    </>
 );
};

export default Header;