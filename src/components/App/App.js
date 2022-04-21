/* eslint-disable react-hooks/exhaustive-deps */
import Timer from "../Timer/Timer";
import Buttons from "../Buttons/Buttons";
import Settings from "../Settings/Settings";
import '../../styles/styles.sass'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setTime, setInitialTime, setTimerStatus, setStartedTime} from '../reduxAction/reduxAction'

function App() {
    const timerType = useSelector(state => state.timerType)
    const dispatch = useDispatch();

    const shortBrake = useSelector(state => state.shortBrake);
    const longBrake = useSelector(state => state.longBrake);
    const startedTime = useSelector(state => state.startedTime)

    const makeChangesDependingOnType = (time) => {
        dispatch(setTime(time));
        dispatch(setTimerStatus(false));
        dispatch(setInitialTime(time));
        dispatch(setStartedTime(sessionStorage.getItem('startedTime')))
    }

    console.log(startedTime)
    useEffect(() => {
        switch (timerType) {
            case "short":
                makeChangesDependingOnType(shortBrake);
                break;
            case "long":
                makeChangesDependingOnType(longBrake);
                break;
            case "timer": 
                makeChangesDependingOnType(startedTime);
                break;
            default:
                dispatch(setTime(sessionStorage.getItem('time')))
        }    
    }, [timerType])

    return (
        <div className="App">
            <div className="container">
                <Buttons/>
                <Timer/>
                <Settings/>
            </div>
        </div>
    );
}

export default App;
