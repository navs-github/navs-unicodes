
const getJoke = () => {
    let content = [];
    for (let i = 0; i < 3; i++) {
        content.push(<li key={i}>{"their child: fuck you my child is completley fine"}</li>);
    }
    return content;
};

function Jokes() {
    return (
        <div className="h-screen p-20 flex flex-col space-y-4">
            <span>my great-great-grand-dad: fuck you my child is completley fine</span>
            <ul className="flex flex-col space-y-4">
                {getJoke()}
            </ul>
            <span>me: <span className="italic font-bold">i need help</span></span>
        </div>
    );
}

export default Jokes;
