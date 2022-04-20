/* eslint-disable react-hooks/exhaustive-deps */
import Timer from "../Timer/Timer";
import Buttons from "../Buttons/Buttons";
import Settings from "../Settings/Settings";
import '../../styles/styles.sass'
import {useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {setTime, setShortBrake, setLongBrake, setInitialTime, setTimerStatus} from '../reduxAction/reduxAction'

function App() {
    const timerType = useSelector(state => state.timerType)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(timerType)
        switch (timerType) {
            case "short":
                dispatch(setTimerStatus(false))
                dispatch(setInitialTime(300));
                dispatch(setTime(300));
                break;
            case "long":
                dispatch(setTimerStatus(false));
                dispatch(setInitialTime(900));
                dispatch(setTime(900));
                break;
            case "timer": 
                dispatch(setTimerStatus(false));
                dispatch(setInitialTime(3600));
                dispatch(setTime(3600));
                break;
            default:
                console.log(sessionStorage.getItem('time'))
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
