import { useState } from 'react';

let unicodes = [
    { name: 'A', unicode: ['à', 'â', '@', 'á', 'æ', 'å'] },
    { name: 'E', unicode: ['ė', 'ę', 'é', 'è', 'ë'] },
    { name: 'I', unicode: ['î', 'ï', 'í', 'ī', 'į', 'ì'] },
    { name: 'O', unicode: ['ô', 'ö', 'ò', 'ó', 'œ', 'ø', 'ō', 'õ'] },
    { name: 'U', unicode: ['û', 'ü', 'ù', 'ú', 'ū'] },
    { name: 'trademark', unicode: ['™'] },
    { name: 'tm', unicode: ['™'] },
    { name: 'em dash', unicode: ['—'] },
    { name: 'copyright', unicode: ['©'] },

]



function Home() {

    const [searchTerm, setSearchTerm] = useState('');
    const [copied, setCopied] = useState(false);
    const [copiedUnicode, setCopiedUnicode] = useState('');
    return (
        <div className="h-screen bg-gray-800">
            {/* left-content */}
            <div className="flex flex-col items-baseline space-y-6 p-8 sm:p-20 font-mono text-xl sm:text-2xl text-gray-100 bg-gray-900">
                <a href="/about" className="">
                    <span className="font-poppins text-blue-300">nāvs-unicodes</span>
                </a>
                <span className="">search for special character by basic character.</span>
                <span className="">This is a limited deployment, <span className="font-bold">try entering a vowel</span></span>
                {/* input and copied! alert */}
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-12 items-baseline sm:items-center">
                    <input
                        className="bg-gray-800 rounded-sm py-2 pl-6 shadow-sm w-42
                        focus:outline-none focus:ring-2 focus:ring-green-700"
                        type="text"
                        placeholder="search..."
                        onChange={(event) => { setSearchTerm(event.target.value); }} />
                    <span className="text-xl"><span className="text-2xl">{copiedUnicode}</span> {copied ? "copied to clipboard :)" : ""} </span>
                </div>

                <div className="grid gap-6 grid-cols-2  sm:gap-8 sm:grid-cols-3 ">{unicodes.filter((val) => {
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
                                        setCopiedUnicode(val);
                                        setCopied('true');
                                    }}>
                                    <p className="text-2xl">{val}</p>
                                    <p className="text-xs text-gray-100">Click to copy</p>
                                </button>
                            </div>
                        )
                    })
                })}
                </div>
            </div >
        </div>

    );
}

export default Home;
