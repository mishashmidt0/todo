import "./style/timeSetting.css"

export const TimeBlock = () => {
    return (
        <section className="time-settings">
            <button className="time-settings__button">Сегодня</button>
            <button className="time-settings__button">На неделю</button>
            <form className="calendar">
                <input type="date" name="calendar"/>
            </form>
            <div className="checkbox-wrapper">
                <input type="checkbox" className="time-settings__checkbox" id="checkbox"/>
                <label htmlFor="checkbox" className="time-settings__label">Только невыполненные</label>
            </div>
        </section>
    )
}
