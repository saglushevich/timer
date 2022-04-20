import './Settings.sass'
import settingsIcon from '../../resources/settings.svg'
import {useState} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {setTime, setInitialTime, setShortBrake, setLongBrake, setMainColor, setMainFont} from '../reduxAction/reduxAction'

function Settings () {

    const time = useSelector(state => state.time);
    const longBrake = useSelector(state => state.longBrake);
    const shortBrake = useSelector(state => state.shortBrake);
    const initialTime = useSelector(state => state.initialTime);
    const mainFont = useSelector(state => state.mainFont)
    const mainColor = useSelector(state => state.mainColor);
    
    const dispatch = useDispatch();

    const [countdown, setCountdown] = useState(time);
    const [shortBrakeTime, setShortBrakeTime] = useState(shortBrake);
    const [longBrakeTime, setLongBrakeTime] = useState(longBrake);
    const [color, setColor] = useState(mainColor);
    const [font, setFont] = useState(mainFont)

    const [modalState, setModalState] = useState(false)

    const onToggleModalState = () => {
        setModalState(modalState => !modalState)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(setTime(countdown));
        dispatch(setInitialTime(countdown));
        dispatch(setShortBrake(shortBrakeTime));
        dispatch(setLongBrake(longBrakeTime));
        dispatch(setMainColor(color));
        dispatch(setMainFont(font));
        sessionStorage.setItem("time", countdown);
        sessionStorage.setItem("shortBrake", shortBrakeTime);
        sessionStorage.setItem("longBrake", longBrakeTime);
        sessionStorage.setItem("color", color);
        sessionStorage.setItem("font", font);
        setModalState(false);
    }

    return (
        <div className="settings">
            <img onClick={onToggleModalState} src={settingsIcon} alt="openSettingsModalIcon" className="settings__icon"/>
            <div className="popup" style={modalState ? {"display" : "block"} : {"display":"none"}}>
                <div className="popup__dialog">
                    <form onSubmit={onFormSubmit} className="popup__content">
                        <div className="popup__title" style={{"fontFamily": `${font}`}}>Настройки</div>
                        <div onClick={onToggleModalState} className="popup__close">&times;</div>
                        <div className="popup__section">
                            <div className="popup__subtitle" style={{"fontFamily": `${font}`}}>Время (минуты)</div>
                            <div className="popup__inputs">
                                <label className="popup__label" style={{"fontFamily": `${font}`}}>Отсчет<input onChange={(e) => setCountdown(e.target.value*60)} required defaultValue={Math.floor(initialTime / 60)} type="number" className="popup__input"></input></label>
                                <label className="popup__label" style={{"fontFamily": `${font}`}}>Короткий перерыв<input onChange={(e) => setShortBrakeTime(e.target.value * 60)} required defaultValue={shortBrake / 60} type="number" className="popup__input"></input></label>
                                <label className="popup__label" style={{"fontFamily": `${font}`}}>Длинный перерыв<input onChange={(e) => setLongBrakeTime(e.target.value * 60)} required defaultValue={longBrake / 60} type="number" className="popup__input"></input></label>
                            </div>
                        </div>  
                        <div className="popup__section" style={{"display":"flex"}}>
                            <div className="popup__subtitle" style={{"fontFamily": `${font}`}}>Шрифт</div>
                            <div className="popup__group">
                                <input onChange={(e) => setFont(e.target.value)} type="radio" value={'Kumbh Sans'} name="font" checked={font === "Kumbh Sans" ? true : false} id="Kumbh" className="popup__item"/>
                                <label htmlFor="Kumbh" className="popup__label-checkbox">Aa</label>
                                
                                <input onChange={(e) => setFont(e.target.value)} type="radio" value={'Roboto Slab'} name="font" checked={font === "Roboto Slab" ? true : false} id="Roboto" className="popup__item"></input>
                                <label htmlFor="Roboto" style={{"fontFamily": "Roboto Slab"}} className="popup__label-checkbox">Aa</label>
                                
                                <input onChange={(e) => setFont(e.target.value)} type="radio" value={'Space Mono'} name="font" checked={font === "Space Mono" ? true : false} id='Space' className="popup__item"></input>
                                <label htmlFor="Space" style={{"fontFamily": "Space Mono"}} className="popup__label-checkbox">Aa</label>
                            </div>
                        </div>
                        <div className="popup__section" style={{"display":"flex"}}>
                            <div className="popup__subtitle" style={{"fontFamily": `${font}`}}>Цвет</div>
                            <div className="popup__group">
                                <input onChange={(e) => setColor(e.target.value)} type="radio" value={"#F87070"} name="color" checked={color === "#F87070" ? true : false} id="red" className="popup__item popup__item_red"/>
                                <label htmlFor="red" className="popup__label-checkbox"></label>
                                
                                <input onChange={(e) => setColor(e.target.value)} type="radio" value={"#70F3F8"} name="color" checked={color === "#70F3F8" ? true : false} id="blue" className="popup__item popup__item_blue"></input>
                                <label htmlFor="blue" className="popup__label-checkbox"></label>
                                
                                <input onChange={(e) => setColor(e.target.value)} type="radio" value={"#D881F8"} name="color" checked={color === "#D881F8" ? true : false} id='purple' className="popup__item popup__item_purple"></input>
                                <label htmlFor="purple" className="popup__label-checkbox"></label>
                            </div>
                        </div>
                        <button className="popup__btn">Сохранить</button>
                    </form>
                </div>   
            </div> 
        </div>
    )
}
export default Settings