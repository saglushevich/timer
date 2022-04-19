import Timer from "../Timer/Timer";
import Buttons from "../Buttons/Buttons";
import Settings from "../Settings/Settings";
import '../../styles/styles.sass'
import {useState, useEffect} from 'react'

function App() {
    const [timerType, setTimerType] = useState(sessionStorage.getItem("time") && sessionStorage.getItem("time") < 3600 ? 'timers' : 'timer');
    const [time, setTime] = useState(sessionStorage.getItem('time') || 3600);
    const [initialTime, setInitialTime] = useState(time)
    const [timerStatus, setTimerStatus] = useState(false);

    useEffect(() => {
        switch (timerType) {
            case "short":
                setTimerStatus(false);
                setInitialTime(300);
                setTime(300);
                break;
            case "long":
                setTimerStatus(false);
                setInitialTime(900);
                setTime(time => 900);
                break;
            case "timer": 
                setTimerStatus(false);
                setInitialTime(3600);
                setTime(time => 3600);
                break;
            default:
                setTime(sessionStorage.getItem('time'))
        }    
    }, [timerType])

    return (
        <div className="App">
            <div className="container">
                <Buttons setTimerType={setTimerType} timerType={timerType}/>
                <Timer time={time} setTime={setTime} initialTime={initialTime} timerStatus={timerStatus} setTimerStatus={setTimerStatus}/>
                <Settings time={time} setTime={setTime} setInitialTime={setInitialTime}/>
            </div>
        </div>
    );
}

export default App;
