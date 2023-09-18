import React, { useState } from 'react';
import ColorBlock from './ColorBlock';

function App() {
  const [colors, setColors] = useState([
    'violet',
    'blue',
    'lightblue',
    'green',
    'greenyellow',
    'yellow',
    'orange',
    'red',
  ]);

  const addColor = (newColor) => {
    setColors ([...colors, newColor]);
  };

  return (
    <div className="App">
      {colors.map((color, i) => (
        <ColorBlock key={i} color={color} />
      ))}
      <div>
        <input
          type="text"
          placeholder="Enter a color"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addColor(e.target.value);
              e.target.value = '';
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;