import { useState } from 'react';

let unicodes = [
  { name: 'A', unicode: ['à', 'â', '@', 'á', 'æ', 'å'] },
  { name: 'E', unicode: ['ė', 'ę', 'é', 'è', 'ë'] }
]


function App() {

  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App flex flex-col items-baseline space-y-6 p-20 font-mono">
      <span className="">search for special character by basic character, click to copy</span>
      <input
        type="text"
        placeholder="search..."
        onChange={(event) => { setSearchTerm(event.target.value); }} />
      {unicodes.filter((val) => {
        if (searchTerm == "") {
          return ""
        }
        else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return val.unicode.map((val, key) => {
          return <div><button className="w-36 py-6 bg-blue-50 rounded-md" onClick={(event) => { navigator.clipboard.writeText(val) }}>{val}</button></div>
        })
      })}
    </div>
  );
}

export default App;
