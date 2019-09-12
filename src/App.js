import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';
import Button from './components/Button/Button';

export default function App() {

  const [count, setCount] = useState(0);
  const [buttons, setButtons] = useState([
    { value: '+', color: 'green', option: 'add' },
    { value: '&', color: 'orange', option: 'clear' },
    { value: '-', color: 'red', option: 'remove' },
  ]);

  const changeCountValue = (option) => {
    (option === 'add') ? setCount(count + 1) : (option === 'remove') ? setCount(count - 1) : setCount(0);
  }

  return (
    <div className="App">
      <Header title="React Clicker" />
      <Counter number={count} />
      {
        buttons.map((button) => {
          return <Button value={button.value} color={button.color} clicked={() => changeCountValue(button.option)} />
        })
      }
    </div>
  );
}
