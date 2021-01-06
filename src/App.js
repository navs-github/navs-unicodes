import { useState } from 'react';

let unicodes = [
  { name: 'A', unicode: ['à', 'â', '@', 'á', 'æ', 'å'] },
  { name: 'E', unicode: ['ė', 'ę', 'é', 'è', 'ë'] },
  { name: 'I', unicode: ['î', 'ï', 'í', 'ī', 'į', 'ì'] },
  { name: 'O', unicode: ['ô', 'ö', 'ò', 'ó', 'œ', 'ø', 'ō', 'õ'] },
  { name: 'U', unicode: ['û', 'ü', 'ù', 'ú', 'ū'] },
  { name: 'TM', unicode: ['™'] },
]


function App() {

  const [searchTerm, setSearchTerm] = useState('');
  //const [copied, setCopied] = useState(false);
  return (
    <div className="flex justify-between">


      <div className="flex-none flex flex-col items-baseline space-y-6 p-20 h-screen font-mono text-2xl text-gray-100 bg-gray-900">
        <span className="font-poppins text-blue-300">nāvs-unicodes</span>
        <span className="">search for special character by basic character.</span>
        <span className="">This is a test deployment, <span className="font-bold">try entering a vowel</span></span>

        <input
          className="bg-gray-800 rounded-sm py-2 pl-6 shadow-sm w-42"
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
            return (
              <div className="">
                <button
                  className="
                  flex flex-col space-y-4 items-center w-36 p-4 bg-gray-800 shadow-sm rounded-md focus:bg-green-800
                  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-900"
                  onClick={(event) => {
                    navigator.clipboard.writeText(val);
                  }}>
                  <p className="text-2xl">{val}</p>
                  <p className="text-xs text-gray-100" onClick={(event => {
                    event.target.textContent = "Copied!";
                  })}>{"Click to copy"}
                  </p>
                </button>
              </div>
            )
          })
        })}
        </div>
      </div >
      <div className="flex flex-col items-baseline space-y-6 py-20 px-8 h-screen w-full font-poppins text-blue-200 bg-blue-900">
        <span>Tool Purpose: Quick-lookup of unicode characters (hard to find) by inputting keyboard characters (simple, present on keyboard).</span>
        <span>Running into some issues with manipulating React states inside dynamically generated HTML elements inside a map() iteration.</span>
        <span>Currently, the unicode data is hard-coded inside the React front-end, I'll have to eventually hook into a database.</span>
        <div className="flex flex-col space-y-8">
          <span> Any react devs out there wanna help me smooth this thing out? hit my socials:</span>
          <ul className="flex flex-col space-y-4 underline font-mono">
            <li><a className="hover:text-white" href="https://www.linkedin.com/in/nav-verma/">LinkedIn</a></li>
            <li><a className="hover:text-white" href="https://twitter.com/nn_aavv">Twitter</a></li>
            <li><a className="hover:text-white" href="https://github.com/ArcticJunkie/navs-unicodes">Project Repository</a></li>
          </ul>
        </div>
      </div>
    </div>

  );
}

export default App;
