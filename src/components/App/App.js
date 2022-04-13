import Timer from "../Timer/Timer";
import Buttons from "../Buttons/Buttons";
import '../../styles/styles.sass'

function App() {
    return (
        <div className="App">
            <div className="container">
                <Buttons/>
                <Timer/>
            </div>
        </div>
    );
}

export default App;
