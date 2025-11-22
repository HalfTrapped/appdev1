import { greetA } from './component/ModuleA.jsx';
import { greetB } from './component/ModuleB.jsx';
import { greetC } from './component/ModuleC.jsx';

export function App() {
  console.log('Hello from RootModule');
  greetA();
  greetB();
  greetC();

  return (
    <h1>App is running!</h1>
  );
}



