import './Settings.sass'
import settingsIcon from '../../resources/settings.svg'

function Settings () {
    return (
        <div className="settings">
            <img src={settingsIcon} alt="openSettingsModalIcon" className="settings__icon"/>
            <SettingsModal/>
        </div>
    )
}

function SettingsModal () {
    return (
        <div className="popup">
            <div className="popup__dialog">
                <form className="popup__content">
                    <div className="popup__title">Настройки</div>
                    <div className="popup__close">&times;</div>
                    <div className="popup__section">
                        <div className="popup__subtitle">Время (минуты)</div>
                        <div className="popup__inputs">
                            <label className="popup__label">Отсчет<input required defaultValue={60} type="number" className="popup__input"></input></label>
                            <label className="popup__label">Короткий перерыв<input required defaultValue={5} type="number" className="popup__input"></input></label>
                            <label className="popup__label">Длинный перерыв<input required defaultValue={15} type="number" className="popup__input"></input></label>
                        </div>
                    </div>
                    <div className="popup__section" style={{"display":"flex"}}>
                        <div className="popup__subtitle">Шрифт</div>
                        <div className="popup__fonts">
                            <input type="checkbox" defaultChecked id="Kumbh" className="popup__item"/>
                            <label htmlFor="Kumbh" className="popup__label-checkbox">Aa</label>
                            
                            <input type="checkbox" id="Roboto" className="popup__item"></input>
                            <label htmlFor="Roboto" className="popup__label-checkbox">Aa</label>
                            
                            <input type="checkbox" id='Space' className="popup__item"></input>
                            <label htmlFor="Space" className="popup__label-checkbox">Aa</label>
                        </div>
                    </div>
                    <div className="popup__section" style={{"display":"flex"}}>
                        <div className="popup__subtitle">Цвет</div>
                        <div className="popup__fonts">
                            <div className="popup__item" style={{"background":"#F87070"}}>Aa</div>
                            <div className="popup__item" style={{"background":"#70F3F8"}}></div>
                            <div className="popup__item" style={{"background":"#D881F8"}}></div>
                        </div>
                    </div>
                    {/* <button className="popup__btn">Сохранить</button> */}
                </form>
            </div>   
        </div> 
    )
}
export default Settings