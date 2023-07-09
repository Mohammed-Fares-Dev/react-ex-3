import { useState } from 'react';
import Cadr from './components/Cadr';
import Inputbox from './components/InputBox';

function App() {

  const [color,setColor] = useState('');
  function handlColor (e)
  {
    setColor(e.target.value)
  }
  return (
    <div className="App">
      <Cadr color={color} />
      <Inputbox color={color} handlColor={handlColor} />
    </div>
  );
}

export default App;
