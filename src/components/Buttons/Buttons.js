import './Buttons.sass';
import {useSelector, useDispatch} from 'react-redux'
import {setTimerType} from '../reduxAction/reduxAction'

function Buttons () {
    const dispatch = useDispatch();
    const timerType = useSelector(state => state.timerType)

    const types = [
        {type: 'timer', title: "Отсчет"},
        {type: 'short', title: "Короткий перерыв"},
        {type: 'long', title: "Большой перерыв"},
    ]

    const btns = types.map(item => {
        const {type, title} = item;
        const active = type === timerType;
        const activeClass = active ? "buttons__item buttons__item_active" : "buttons__item";
        return (
            <div key={title} onClick={() => dispatch(setTimerType(type))}  className={activeClass}>{title}</div>
        )
    })

    return (
        <div className="buttons">
            <div className="buttons__wrapper">
                {btns}
            </div>
        </div>
    )
}
export default Buttons