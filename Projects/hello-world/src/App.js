import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Style from './components/Style';

function App() {
  return (
    <div className="App">
      <Style/>
      {/* <NameList/> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent/> */}
      {/* <EventBind /> */}
      {/* <Greet name="Hasan" heroName="Batman"><p>This is child props</p></Greet> */}
      {/* <Welcome name="Hasan" heroName="Batman"/> */}
      {/* <Message /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
