const initialState = {
    time: sessionStorage.getItem('time') || 3600,
    initialTime: 3600,
    shortBrake: 300,
    longBrake: 900,
    timerType: sessionStorage.getItem("time") && sessionStorage.getItem("time") < 3600 ? 'timers' : 'timer',
    timerStatus: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_TIME":
            return {...state, time: action.payload}
        case "SET_INITIAL_TIME":
            return {...state, initialTime: action.payload}
        case "SET_SHORT_BRAKE":
            return {...state, shortBrake: action.payload}
        case "SET_LONG_BRAKE":
            return {...state, longBrake: action.payload}
        case "SET_TIMER_TYPE":
            return {...state, timerType: action.payload}
        case "SET_TIMER_STATUS":
            return {...state, timerStatus: action.payload}
        default:
            return state
    }
}

export default reducer