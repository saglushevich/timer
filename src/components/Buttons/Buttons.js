import './Buttons.sass';
import {useSelector, useDispatch} from 'react-redux'
import {setTimerType} from '../reduxAction/reduxAction'

function Buttons () {
    const dispatch = useDispatch();
    const timerType = useSelector(state => state.timerType);
    const mainColor = useSelector(state => state.mainColor);
    const mainFont = useSelector(state => state.mainFont)

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
            <div key={title} onClick={() => dispatch(setTimerType(type))} style={active ? {"backgroundColor" : `${mainColor}`, "fontFamily" : `${mainFont}`} : {"fontFamily" : `${mainFont}`}} className={activeClass}>{title}</div>
        )
    })

    let wrapperStyle = 'buttons__wrapper';

    switch (mainFont) {
        case "Space Mono":
            wrapperStyle += ' buttons__wrapper_medium';
            break;
        case "Roboto Slab":
            wrapperStyle += ' buttons__wrapper_large';
            break;
        default:
            wrapperStyle += ' buttons__wrapper_small'
            break;
    }

    return (
        <div className="buttons">
            <div className= {wrapperStyle}>
                {btns}
            </div>
        </div>
    )
}
export default Buttons