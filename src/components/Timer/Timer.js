/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import './Timer.sass'
import {useEffect, useState} from 'react'

function Timer (props) {
    const {time, setTime, initialTime, timerStatus, setTimerStatus} = props;
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const startTimer = () => {
        if (time > 0 && timerStatus) {
            setTimeout(() => {
                setTime(time => time - 1)
            }, 1000)
        } else {
            setTimerStatus(false)
            sessionStorage.removeItem("time")
        }
        sessionStorage.setItem('time', time)
    }

    const resetTimer = () => {
        sessionStorage.removeItem("time")
        setTime(initialTime)
        setTimerStatus(true)
    }

    useEffect(() => {
        if (sessionStorage.getItem("time") == 0) {
            sessionStorage.removeItem("time")
        }
        startTimer();
        setMinutes(minutes => Math.floor(time / 60));
        setSeconds(seconds => time % 60)
    }, [timerStatus, time])

    return (
        <div className="timer">
            <div className="timer__wrapper" style={time === 0 ? {"boxShadow" : " -25px -25px 100px #F87070, 25px 25px 100px #F87070 ", "background" : "linear-gradient(315deg, #2E325A 0%, #F87070 100%)" } : null}>
                <div className="timer__oval">
                    <div className="timer__progress" style={{"background" : `conic-gradient(#F87070 ${(time * 100) / initialTime}%, #161932 0%)`}}>
                        <div className="timer__info">
                            <div className="timer__time">{minutes}:{seconds >= 10 ? seconds : `0${seconds}`}</div>
                            <div onClick={() => setTimerStatus(timerStatus => !timerStatus)} style={time ? {"display" : "block"} : {"display" : "none"}} className="timer__btn">{timerStatus ? "Стоп" : "Старт"}</div>
                            <div onClick={resetTimer} style={time ? {"display" : "none"} : {"display" : "block"}} className="timer__btn">Запуск</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer