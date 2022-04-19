import './Settings.sass'
import settingsIcon from '../../resources/settings.svg'
import {useState} from 'react'

function Settings (props) {
    const {time, setTime, setInitialTime} = props;
    const [countdown, setCountdown] = useState(time)
    const [modalState, setModalState] = useState(false)

    const onToggleModalState = () => {
        setModalState(modalState => !modalState)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        setTime(countdown)
        setInitialTime(countdown)
        setModalState(false)
    }

    return (
        <div className="settings">
            <img onClick={onToggleModalState} src={settingsIcon} alt="openSettingsModalIcon" className="settings__icon"/>
            <div className="popup" style={modalState ? {"display" : "block"} : {"display":"none"}}>
                <div className="popup__dialog">
                    <form onSubmit={onFormSubmit} className="popup__content">
                        <div className="popup__title">Настройки</div>
                        <div onClick={onToggleModalState} className="popup__close">&times;</div>
                        <div className="popup__section">
                            <div className="popup__subtitle">Время (минуты)</div>
                            <div className="popup__inputs">
                                <label className="popup__label">Отсчет<input onChange={(e) => setCountdown(e.target.value*60)} required defaultValue={time / 60} type="number" className="popup__input"></input></label>
                                <label className="popup__label">Короткий перерыв<input required defaultValue={5} type="number" className="popup__input"></input></label>
                                <label className="popup__label">Длинный перерыв<input required defaultValue={15} type="number" className="popup__input"></input></label>
                            </div>
                        </div>  
                        <div className="popup__section" style={{"display":"flex"}}>
                            <div className="popup__subtitle">Шрифт</div>
                            <div className="popup__group">
                                <input type="radio" value={"kumbh"} name="font" defaultChecked id="Kumbh" className="popup__item"/>
                                <label htmlFor="Kumbh" className="popup__label-checkbox">Aa</label>
                                
                                <input type="radio" value={"roboto"} name="font" id="Roboto" className="popup__item"></input>
                                <label htmlFor="Roboto" className="popup__label-checkbox">Aa</label>
                                
                                <input type="radio" value={"space"} name="font" id='Space' className="popup__item"></input>
                                <label htmlFor="Space" className="popup__label-checkbox">Aa</label>
                            </div>
                        </div>
                        <div className="popup__section" style={{"display":"flex"}}>
                            <div className="popup__subtitle">Цвет</div>
                            <div className="popup__group">
                                <input type="radio" value={"red"} name="color" defaultChecked id="red" className="popup__item popup__item_red"/>
                                <label htmlFor="red" className="popup__label-checkbox"></label>
                                
                                <input type="radio" value={"blue"} name="color" id="blue" className="popup__item popup__item_blue"></input>
                                <label htmlFor="blue" className="popup__label-checkbox"></label>
                                
                                <input type="radio" value={"purple"} name="color" id='purple' className="popup__item popup__item_purple"></input>
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

// function SettingsModal () {
//     return (
        
//     )
// }
export default Settings