import React, { useState } from 'react';
import DisplayNested from './components/DisplayNested';
import './App.css';

export function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
      },
    },
  });

  return (
    <div className='App'>
      <DisplayNested data={nestedObjected}/>
    </div>
  );
}

export default App;