import "./style/taskStyle.css"

export const Tasks = () => {
    return (
        <section className="task-list">
            <div className="settings-wrapper">
                <time dateTime="2022-05-08" className="task-list__date">8 мая 2022</time>
                <div className="sorting-wrapper">
                    <div className="task-list__icon">
                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.27624 0.363598C2.27624 0.267166 2.23628 0.174683 2.16515 0.106495C2.09402 0.0383076 1.99754 0 1.89695 0C1.79635 0 1.69988 0.0383076 1.62875 0.106495C1.55762 0.174683 1.51765 0.267166 1.51765 0.363598V6.75783L0.648313 5.92373C0.577092 5.85546 0.480495 5.81711 0.379773 5.81711C0.279051 5.81711 0.182454 5.85546 0.111233 5.92373C0.0400117 5.99201 2.37309e-09 6.08461 0 6.18116C-2.37309e-09 6.27772 0.0400117 6.37032 0.111233 6.43859L1.62841 7.89225L1.63372 7.89734C1.70493 7.96391 1.8007 8.0008 1.90016 7.99999C1.99962 7.99917 2.09472 7.96071 2.16473 7.89298L3.68191 6.43859C3.71717 6.40483 3.74515 6.36475 3.76426 6.32062C3.78336 6.27649 3.79321 6.22919 3.79325 6.18142C3.79328 6.13364 3.7835 6.08633 3.76446 6.04218C3.74542 5.99803 3.7175 5.9579 3.68228 5.9241C3.64707 5.89029 3.60525 5.86347 3.55922 5.84515C3.51319 5.82684 3.46385 5.8174 3.41401 5.81736C3.36418 5.81733 3.31482 5.82671 3.26876 5.84496C3.22271 5.86321 3.18085 5.88998 3.14558 5.92373L2.27624 6.75783V0.363598ZM4.9313 1.09079C4.9313 0.994361 4.97126 0.901879 5.04239 0.833691C5.11352 0.765503 5.21 0.727196 5.31059 0.727196H10.6207C10.7213 0.727196 10.8178 0.765503 10.8889 0.833691C10.96 0.901879 11 0.994361 11 1.09079C11 1.18723 10.96 1.27971 10.8889 1.3479C10.8178 1.41608 10.7213 1.45439 10.6207 1.45439H5.31059C5.21 1.45439 5.11352 1.41608 5.04239 1.3479C4.97126 1.27971 4.9313 1.18723 4.9313 1.09079ZM5.31059 2.90878C5.21 2.90878 5.11352 2.94709 5.04239 3.01528C4.97126 3.08347 4.9313 3.17595 4.9313 3.27238C4.9313 3.36881 4.97126 3.46129 5.04239 3.52948C5.11352 3.59767 5.21 3.63598 5.31059 3.63598H9.10353C9.20413 3.63598 9.3006 3.59767 9.37173 3.52948C9.44286 3.46129 9.48282 3.36881 9.48282 3.27238C9.48282 3.17595 9.44286 3.08347 9.37173 3.01528C9.3006 2.94709 9.20413 2.90878 9.10353 2.90878H5.31059ZM5.31059 5.09037C5.21 5.09037 5.11352 5.12868 5.04239 5.19686C4.97126 5.26505 4.9313 5.35753 4.9313 5.45397C4.9313 5.5504 4.97126 5.64288 5.04239 5.71107C5.11352 5.77926 5.21 5.81756 5.31059 5.81756H7.58636C7.68695 5.81756 7.78343 5.77926 7.85456 5.71107C7.92569 5.64288 7.96565 5.5504 7.96565 5.45397C7.96565 5.35753 7.92569 5.26505 7.85456 5.19686C7.78343 5.12868 7.68695 5.09037 7.58636 5.09037H5.31059ZM5.31059 7.27196C5.21 7.27196 5.11352 7.31026 5.04239 7.37845C4.97126 7.44664 4.9313 7.53912 4.9313 7.63555C4.9313 7.73199 4.97126 7.82447 5.04239 7.89266C5.11352 7.96084 5.21 7.99915 5.31059 7.99915H6.06918C6.16978 7.99915 6.26625 7.96084 6.33738 7.89266C6.40851 7.82447 6.44847 7.73199 6.44847 7.63555C6.44847 7.53912 6.40851 7.44664 6.33738 7.37845C6.26625 7.31026 6.16978 7.27196 6.06918 7.27196H5.31059Z"
                                fill="black"/>
                        </svg>
                    </div>
                    <p className="task-list__sorting">Сортировать по дате</p>
                </div>
            </div>
            <article className="task">
                <div className="task-wrapper">
                    <h2 className="task__name">Название</h2>
                    <p className="task__description">Описание</p>
                </div>
                <div className="task-wrapper">
                    <input type="checkbox" id="task1" className="task__checkbox" checked/>
                    <label htmlFor="task1" className="task__label"/>
                    <time dateTime="2022-05-08 00:10" className="task__datetime">08.05.2022 00:10</time>
                </div>
            </article>
            <article className="task">
                <div className="task-wrapper">
                    <h2 className="task__name">Название</h2>
                    <p className="task__description">Описание</p>
                </div>
                <div className="task-wrapper">
                    <input type="checkbox" id="task2" className="task__checkbox"/>
                    <label htmlFor="task2" className="task__label"/>
                    <time dateTime="2022-05-08 00:05" className="task__datetime">08.05.2022 00:05</time>
                </div>
            </article>
            <article className="task">
                <div className="task-wrapper">
                    <h2 className="task__name">Название</h2>
                    <p className="task__description">Описание</p>
                </div>
                <div className="task-wrapper">
                    <input type="checkbox" id="task3" className="task__checkbox" checked/>
                    <label htmlFor="task3" className="task__label"/>
                    <time dateTime="2022-05-08 00:00" className="task__datetime">08.05.2022 00:00</time>
                </div>
            </article>

        </section>
    )
}
