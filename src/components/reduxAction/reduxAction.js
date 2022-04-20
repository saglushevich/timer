export const setTime = (value) => {
    return {
        type: "SET_TIME",
        payload: value
    }
}

export const setInitialTime = (value) => {
    return {
        type: "SET_INITIAL_TIME",
        payload: value
    }
}

export const setShortBrake = (value) => {
    return {
        type: "SET_SHORT_BRAKE",
        payload: value
    }
}

export const setLongBrake = (value) => {
    return {
        type: "SET_LONG_BRAKE",
        payload: value
    }
}

export const setTimerType = (value) => {
    return {
        type: "SET_TIMER_TYPE",
        payload: value
    }
}

export const setTimerStatus = (value) => {
    return {
        type: "SET_TIMER_STATUS",
        payload: value
    }
}

export const setMainColor = (value) => {
    return {
        type: "SET_COLOR",
        payload: value
    }
}

export const setMainFont = (value) => {
    return {
        type: "SET_FONT",
        payload: value
    }
}