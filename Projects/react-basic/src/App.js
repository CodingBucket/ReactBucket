import React from 'react';
import './App.css';
import Greet from './components/01_FuntionalComponent/Greet'
import Welcome from './components/02_ClassComponent/Welcome'
import Message from './components/03_State/Message'
import Counter from './components/03_State/Counter'

function App() {
  return (
    <div className="App">
      <Greet name="Hasan" heroName="Superman">
        <p>This is children props</p>
      </Greet>
      <Welcome name="Hasan" heroName="Superman" />
      <Counter />
    </div>
  );
}

export default App;
