import { useState, useRef, useEffect } from 'react'
import Nav from './Nav'

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
    { name: 'square', unicode: ['²'] },
    { name: 'cube', unicode: ['³'] },
    { name: '^', unicode: ['²', '³'] },
    { name: 'c', unicode: ['¢'] },
    { name: 'cent', unicode: ['¢'] },
    { name: 'pound', unicode: ['£'] },
    { name: 'yen', unicode: ['¥'] },
    { name: 'euro', unicode: ['€'] },
    { name: 'alpha', unicode: ['α'] },
    { name: 'beta', unicode: ['β'] },
    { name: 'gamma', unicode: ['γ'] },
    { name: 'delta', unicode: ['δ'] },
    { name: 'epsilon', unicode: ['ε'] },
    { name: 'theta', unicode: ['θ'] },
    { name: 'lambda', unicode: ['λ'] },
    { name: 'mu', unicode: ['μ'] },
    { name: 'pi', unicode: ['π'] },
    { name: 'sigma', unicode: ['σ'] },
    { name: 'tau', unicode: ['τ'] },
    { name: 'phi', unicode: ['φ'] },
    { name: 'omega', unicode: ['ω'] },
    { name: 'infinity', unicode: ['∞'] },
    { name: 'plus minus', unicode: ['±'] },
    { name: 'multiply', unicode: ['×'] },
    { name: 'divide', unicode: ['÷'] },
    { name: 'not equal', unicode: ['≠'] },
    { name: 'less than', unicode: ['<'] },
    { name: 'greater than', unicode: ['>'] },
    { name: 'less than or equal', unicode: ['≤'] },
    { name: 'greater than or equal', unicode: ['≥'] },
    { name: 'and', unicode: ['∧'] },
    { name: 'or', unicode: ['∨'] },
    { name: 'therefore', unicode: ['∴'] },
    { name: 'because', unicode: ['∵'] },
    { name: 'for all', unicode: ['∀'] },
    { name: 'there exists', unicode: ['∃'] },
    { name: 'element of', unicode: ['∈'] },
    { name: 'not element of', unicode: ['∉'] },
    { name: 'subset of', unicode: ['⊂'] },
    { name: 'superset of', unicode: ['⊃'] },
    { name: 'subset or equal', unicode: ['⊆'] },
    { name: 'superset or equal', unicode: ['⊇'] },
    { name: 'intersection', unicode: ['∩'] },
    { name: 'union', unicode: ['∪'] },
    { name: 'empty set', unicode: ['∅'] },
    { name: 'nabla', unicode: ['∇'] },
    { name: 'partial', unicode: ['∂'] },
    { name: 'integral', unicode: ['∫'] },
]



function Landing() {

    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    const [searchTerm, setSearchTerm] = useState('');
    const [copied, setCopied] = useState(false);
    const [copiedUnicode, setCopiedUnicode] = useState('');
    return (
        <div className="h-screen bg-gray-900">
            <div className="flex flex-col items-baseline p-20 sm:p-20 font-mono text-lg sm:text-xl md:text-2xl text-gray-100 bg-gray-900">
                <Nav />
                <span className="mt-20">search for special character by basic character.</span>
                <span className="mt-6"><span className="font-bold">try naming a special character.</span></span>
                {/* input and copied! alert */}
                <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-x-12 items-baseline sm:items-center">
                    <input
                        className="bg-gray-800 rounded-sm py-2 pl-6 shadow-sm w-42
                        focus:outline-none focus:ring-2 focus:ring-green-700"
                        ref={inputRef}
                        type="text"
                        placeholder="search..."
                        onChange={(event) => { setSearchTerm(event.target.value); }} />
                    <span className="text-xl"><span className="text-2xl">{copiedUnicode}</span> {copied ? "copied to clipboard." : ""} </span>
                </div>

                <div className="mt-8 grid gap-6 grid-cols-2 md:gap-8 md:grid-cols-5">{unicodes.filter((val) => {
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
                                    className="flex flex-col space-y-4 items-center w-36 p-6 bg-gray-800 shadow-sm rounded-md focus:bg-green-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-900"
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

export default Landing;
