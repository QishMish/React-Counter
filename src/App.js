import React,{useState} from 'react'
import './App.css';
import logo from './Images/react.png'

function App() {

  const [counter, setCounter] = useState(0)

  const Increase=()=>{
    setCounter((prevState)=>{
        return prevState + 1 ;
      })
  }
  const Reset=()=>{
    setCounter(0)
  }
  const Decrease=()=>{
    setCounter((prevState)=>{
      return prevState - 1 ;
    })
  }
  return (
    <div className="App">
      <div className='header'>
        <img className='logo' src={logo} alt='logo' />
        <h1>Hello</h1>
      </div>
      <div className='counter-container'>
          <span className={counter > 0 ? 'positive' : counter < 0 ? 'negative' : null}>{counter}</span>
          <div className='buttons'>
            <button onClick={Decrease}>Decrease</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={Increase}>Increase</button>
          </div>
      </div>
    </div>
  );
}

export default App;
