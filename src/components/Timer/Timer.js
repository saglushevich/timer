/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import './Timer.sass'
import {useEffect, useState} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {setInitialTime, setTime, setTimerStatus} from '../reduxAction/reduxAction'

function Timer () {

    const time = useSelector(state => state.time);
    
    const timerStatus = useSelector(state => state.timerStatus);
    const initialTime = useSelector(state => state.initialTime);
    const mainColor = useSelector(state => state.mainColor);
    const mainFont = useSelector(state => state.mainFont)
    const startedTime = useSelector(state => state.startedTime)

    const [minutes, setMinutes] = useState(60);
    const [seconds, setSeconds] = useState(0);

    const dispatch = useDispatch();

    const startTimer =  () => {
        if (time > 0 && timerStatus) {
            setTimeout(() => {
                dispatch(setTime(time - 1))
            }, 1000)
        } else {
            dispatch(setTimerStatus(false))
            dispatch(setTime(initialTime))
        }
        sessionStorage.setItem('time', time)
    }

    const stopTimer = () => {
        dispatch(setTimerStatus(false));
        dispatch(setInitialTime(time));
    }

    const resetTimer = () => {
        sessionStorage.removeItem("time")
        dispatch(setTime(initialTime))
        dispatch(setTimerStatus(true))
    }
    
    useEffect(() => {
        startTimer();
        if (sessionStorage.getItem("time") == 0) {
            sessionStorage.removeItem("time")
        }
        setMinutes(minutes => Math.floor(time / 60));
        setSeconds(seconds => time % 60)
    }, [timerStatus, time])

    return (
        <div className="timer">
            <div className="timer__wrapper" style={time === 0 ? {"boxShadow" : ` -25px -25px 100px ${mainColor}, 25px 25px 100px ${mainColor} `, "background" : `linear-gradient(315deg, #2E325A 0%, ${mainColor} 100%)` } : null}>
                <div className="timer__oval">
                    <div className="timer__progress" style={{"background" : `conic-gradient(${mainColor} ${(time * 100) / startedTime}%, #161932 0%)`}}>
                        <div className="timer__info">
                            <div className="timer__time" style={{"fontFamily": `${mainFont}`}}>{Math.floor(minutes)}:{seconds >= 10 ? seconds : `0${seconds}`}</div>
                            <div onClick={() => dispatch(setTimerStatus(!timerStatus))} style={timerStatus ? {"display" : "none"} : {"display" : "block", "fontFamily": `${mainFont}`}} className="timer__btn">Старт</div>
                            <div onClick={stopTimer} style={timerStatus ? {"display" : "block", "fontFamily": `${mainFont}`} : {"display" : "none"}} className="timer__btn">Стоп</div>
                            <div onClick={resetTimer} style={time ? {"display" : "none"} : {"display" : "block", "fontFamily": `${mainFont}`}} className="timer__btn">Перезапуск</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer