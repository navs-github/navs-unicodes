import { useState } from 'react';

let unicodes = [
  { name: 'A', unicode: ['à', 'Â', '@'] },
  { name: 'E', unicode: ['ė', 'ę'] }
]


function App() {

  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App flex flex-col items-baseline p-20">
      <input
        type="text"
        placeholder="search..."
        onChange={(event) => { setSearchTerm(event.target.value); }} />
      {unicodes.filter((val) => {
        if (setSearchTerm == "") {
          return val
        }
        else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return <div className="py-4 text-2xl font-bold text-gray-700">{val.unicode}</div>
      })}
    </div>
  );
}

export default App;
