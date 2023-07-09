import { useState } from 'react';
import Cadr from './components/Cadr';
import Input from './components/Input';

function App() {

  const [color,setColor] = useState('');
  function handlColor (e)
  {
    setColor(e.target.value)
  }
  return (
    <div className="App">
      <Cadr color={color} />
      <Input color={color} handlColor={handlColor} />
    </div>
  );
}

export default App;
