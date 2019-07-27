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
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import LifecycleB from './components/LifecycleB';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/ForwardRef/FRParentInput';

function App() {
  return (
    <div className="App">
      <FRParentInput />
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <LifecycleB/> */}
      {/* <LifecycleA/> */}
      {/* <Form /> */}
      {/* <Style/> */}
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
