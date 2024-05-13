import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=')
        try {
          setResult(eval(display));
        }
        catch{
          setResult('Error');
        }
        else if(value === 'C'){
          setDisplay('');
          setResult('');
        }
        else{
          setDisplay( display + value);
        }
    
  }
return (
  <>
    <div className='main'>
    <h1>Calculator</h1>
    <input id='t1' type='text' value={display} readOnly /> <br /> <br />
    <div>
      <button onClick={() => handleClick('1')}>1</button>
      <button onClick={() => handleClick('2')}>2</button>
      <button onClick={() => handleClick('3')}>3</button>
      <button onClick={() => handleClick('+')}>+</button>
    </div>
    <div>
      <button onClick={() => handleClick('4')}>4</button>
      <button onClick={() => handleClick('5')}>5</button>
      <button onClick={() => handleClick('6')}>6</button>
      <button onClick={() => handleClick('-')}>-</button>
    </div>
    <div>
      <button onClick={() => handleClick('7')}>7</button>
      <button onClick={() => handleClick('8')}>8</button>
      <button onClick={() => handleClick('9')}>9</button>
      <button onClick={() => handleClick('*')}>*</button>
    </div>
    <div>
      <button onClick={() => handleClick('.')}>.</button>
      <button onClick={() => handleClick('0')}>0</button>
      <button onClick={() => handleClick('=')}>=</button>
      <button onClick={() => handleClick('/')}>/</button>
    </div>
    <div>
    <button onClick={() => handleClick('C')}>C</button>
    </div>
    <div>
      <p>Result: {result}</p>
    </div>
    </div>
  </>
)
}

export default App