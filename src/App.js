import { useState } from 'react';

let unicodes = [
  { name: 'A', unicode: ['à', 'â', '@', 'á', 'æ', 'å'] },
  { name: 'E', unicode: ['ė', 'ę', 'é', 'è', 'ë'] },
  { name: 'I', unicode: ['î', 'ï', 'í', 'ī', 'į', 'ì'] },
  { name: 'O', unicode: ['ô', 'ö', 'ò', 'ó', 'œ', 'ø', 'ō', 'õ'] },
  { name: 'U', unicode: ['û', 'ü', 'ù', 'ú', 'ū'] },
  { name: 'TM', unicode: ['™'] }
]


function App() {

  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App flex flex-col items-baseline space-y-6 p-20 font-mono">
      <span className="">search for special character by basic character.</span>
      <span className="">This is a test deployment, try entering a vowel.</span>
      <input
        className="bg-gray-200 rounded-sm p-2 shadow-sm"
        type="text"
        placeholder="search..."
        onChange={(event) => { setSearchTerm(event.target.value); }} />

      <div className="grid gap-4 grid-cols-3">{unicodes.filter((val) => {
        if (searchTerm === "") {
          return ""
        }
        else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return val.unicode.map((val, key) => {
          return <div className=""><button className="flex flex-col space-y-4 items-center w-36 py-6 bg-gray-200 shadow-sm rounded-md focus:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-600" onClick={(event) => { navigator.clipboard.writeText(val) }}><p>{val}</p><span className="text-xs text-gray-700">Copy to clipboard</span></button></div>
        })
      })}
      </div>

    </div>
  );
}

export default App;
