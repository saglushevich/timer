import './Timer.sass'

function Timer () {
    return (
        <div className="timer">
            <div className="timer__wrapper">
                <div className="timer__oval">
                    <div className="timer__progress">
                        <div className="timer__info">
                            <h1 className="timer__time">17:59</h1>
                            <div className="timer__btn">Пауза</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer