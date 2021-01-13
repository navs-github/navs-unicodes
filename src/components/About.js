import { Route, BrowserRouter as Router } from "react-router-dom";

function About() {
    return (
        <div className="">
            <div className="flex flex-col items-baseline space-y-6 py-20 px-8 h-screen w-full font-poppins text-blue-200 bg-blue-900">
                <span>Tool purpose: Quick-lookup of unicode characters (hard to find) by inputting keyboard characters (simple, present on keyboard).</span>
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

export default About;
