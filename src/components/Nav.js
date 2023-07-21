function Nav() {
    return (
        <div className="w-full flex flex-row justify-between items-baseline">
            <a href="/about" className="">
                <span className="font-poppins text-4xl  text-blue-300 hover:text-white">nāvs-unicõdes</span>
            </a>
            <div className="flex flex-row space-x-6 sm:space-x-12 text-base sm:text-lg md:text-2xl">
                <a href="https://abhinavcreative.com">
                    <span className="font-poppins text-blue-300 hover:text-white">creator</span>
                </a>

                <a href="/about">
                    <span className="font-poppins text-blue-300 hover:text-white">about</span>
                </a>
            </div>
        </div>
    )

}

export default Nav;
