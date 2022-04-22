/* eslint-disable react-hooks/exhaustive-deps */
import Timer from "../Timer/Timer";
import Buttons from "../Buttons/Buttons";
import Settings from "../Settings/Settings";
import '../../styles/styles.sass'
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setTime, setInitialTime, setTimerStatus} from '../reduxAction/reduxAction'

function App() {
    const timerType = useSelector(state => state.timerType)
    const dispatch = useDispatch();
    const time = useSelector(state => state.time)

    const shortBrake = useSelector(state => state.shortBrake);
    const longBrake = useSelector(state => state.longBrake);

    const [started, setStarted] = useState(time)

    const makeChangesDependingOnType = (time) => {
        dispatch(setTime(time));
        dispatch(setTimerStatus(false));
        dispatch(setInitialTime(time));
        setStarted(time)
    }

    useEffect(() => {
        switch (timerType) {
            case "short":
                makeChangesDependingOnType(shortBrake);
                break;
            case "long":
                makeChangesDependingOnType(longBrake);
                break;
            case "timer": 
                makeChangesDependingOnType(3600);
                break;
            case "settedTime":
                makeChangesDependingOnType(sessionStorage.getItem('settedTime'));
                break;
            default:
                dispatch(setTime(sessionStorage.getItem('time')))
        }    
    }, [timerType, shortBrake, longBrake])

    return (
        <div className="App">
            <div className="container">
                <Buttons/>
                <Timer started={started}/>
                <Settings/>
            </div>
        </div>
    );
}

export default App;
