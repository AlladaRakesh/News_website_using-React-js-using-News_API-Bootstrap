import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import Newsitems from './Components/Newsitems';

function App() {

const [category,setCategory]=useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <News category={category}/>
      <Newsitems/>
      =
    </div>
  );
}

export default App;