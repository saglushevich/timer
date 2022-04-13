import './Buttons.sass'

function Buttons () {
    return (
        <div className="buttons">
            <div className="buttons__wrapper">
                <div className="buttons__item buttons__item_active">Отсчет</div>
                <div className="buttons__item">Короткий перерыв</div>
                <div className="buttons__item">Большой перерыв</div>
            </div>
        </div>
    )
}
export default Buttons