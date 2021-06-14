
function About() {
    return (
        <div className="">
            <div className="flex flex-col items-baseline py-20 px-8 h-screen w-full font-poppins text-xl text-pink-100 bg-blue-900">
                <span className="mt-6">Tool purpose: Quick-lookup of unicode characters (hard to find) by inputting keyboard characters (simple, present on keyboard).</span>
                <span className="mt-6">Currently, the unicode data is hard-coded inside the React front-end, eventually hooks into a unicode API (there isn't one presently) or a custom database.</span>
                <div className="mt-12 flex flex-col">
                    <span className="">Any react devs out there wanna help me smooth this thing out? hit my socials:</span>
                    <ul className="mt-4 flex flex-col space-y-4 underline font-mono">
                        <li><a className="hover:text-white" href="https://www.linkedin.com/in/nav-verma/">LinkedIn</a></li>
                        <li><a className="hover:text-white" href="https://github.com/ArcticJunkie/navs-unicodes">Project Repository</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
