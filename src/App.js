import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';  // import for a default export 
import GreetClass from './Components/GreetClass';
import Welcome from './Components/WithoutJSX';
import GreetProps from './Components/PropsClass';
import Message from './Components/Message';
import StateDemo from './Components/StateDemo';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import ConditionalRendering from './Components/ConditionalRendering';
import NameList from './Components/NameList';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import ModuleStylesDemo from './Components/ModuleStylesDemo';
import Form from './Components/Form';
import TodoApp from './Components/TodoApp';

//import {Greet} from './Components/Greet' // import for a named export

function App() {
  return (
    <div>
      <TodoApp />
      {/* <Form /> */}
      {/* <ModuleStylesDemo/> */}
      {/* <Inline /> */}
      {/* <Stylesheet applyPrimaryStyle={false}/> */}
      {/* <NameList/> */}
      {/* <ConditionalRendering/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <Greet name="Goku" /> */}
      {/* <GreetClass name="Goku" oname="Kakarot"/>
    <GreetClass name="Beerus" oname="The God of Destruction"/> */}
      {/* <Welcome name="World"/> */}
      {/* <GreetProps name="Son Goku" oname="Kakarot">
       <p>Gohan is my son</p>
     </GreetProps>

     <GreetProps name="Vegita" oname="Prince Vegita">
      <button>Click</button>
     </GreetProps>

     <GreetProps name="Beerus" oname="The God of Destruction">
      
     </GreetProps> */}

      {/* <Message name="Visitor"/> */}

      {/* <StateDemo addVal={2}/> */}

    </div>
  );
}

export default App;
