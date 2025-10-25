import ComponentA from './component/ComponentA.jsx';
import ComponentC from './component/ComponentC.jsx';

function RootComponent() {
  return (
    <div>
      <h1>Root Component</h1>
      <ComponentA />
      <ComponentC />
    </div>
  );
}

export default RootComponent;


