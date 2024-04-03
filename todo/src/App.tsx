import React, { useState } from 'react';
import Header from './components/Header';
import ToDoCard from './components/ToDoCard';
const App = () => {
 const [arr, setArr] = useState<[string, boolean][]>([['Initial Todo', false]]);

 return (
    <div className='mx-24'>
      <Header arr={arr} setArr={setArr} />
      <ToDoCard arr={arr} setArr={setArr}/>
    </div>
 );
};

export default App;