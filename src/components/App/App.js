import Timer from "../Timer/Timer";
import Buttons from "../Buttons/Buttons";
import '../../styles/styles.sass'
import {useState, useEffect} from 'react'

function App() {
    const [timerType, setTimerType] = useState('timer');
    const [time, setTime] = useState(sessionStorage.getItem('time') || 3600);
    const [initialTime, setInitialTime] = useState(time)
    const [timerStatus, setTimerStatus] = useState(false);

    useEffect(() => {
        switch (timerType) {
            case "short":
                setTimerStatus(false);
                setInitialTime(300);
                setTime(sessionStorage.getItem('time')|| 300);
                break;
            case "long":
                setTimerStatus(false);
                setInitialTime(900);
                setTime(time => 900);
                break;
            default: 
                setTimerStatus(false);
                setInitialTime(3600);
                setTime(time => 3600);
                break;
        }    
    }, [timerType])

    return (
        <div className="App">
            <div className="container">
                <Buttons setTimerType={setTimerType} timerType={timerType}/>
                <Timer time={time} setTime={setTime} initialTime={initialTime} timerStatus={timerStatus} setTimerStatus={setTimerStatus}/>
            </div>
        </div>
    );
}

export default App;
