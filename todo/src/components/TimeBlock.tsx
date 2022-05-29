import "./style/timeSetting.css"
import {Axios} from "../core/core";
import {addBdTodo} from "../redux/todo-reducer";
import {useDispatch} from "react-redux";
import {Calendar} from "./Calendar";
import React, {useCallback, useState} from "react";

export const TimeBlock = React.memo(() => {
    const [active, setActive] = useState<boolean>(false)
    const dispatch = useDispatch()

    const getDate = useCallback((inf: number) => {
        const today = new Date();
        const d = today.getDate()
        const m = today.getMonth() + 1
        const y = today.getFullYear()
        const date = `${y}-${m}-${d}`


        if (inf === 7) {
            const week = new Date(today.setDate(today.getDate() + 7));
            const d = week.getDate()
            const m = week.getMonth() + 1
            const y = week.getFullYear()
            const date2 = `${y}-${m}-${d}`

            return Axios.get(`/todos/date/${date}/${date2}`)
                .then((resp) => {
                    const allTodos = resp.data;
                    dispatch(addBdTodo(allTodos))
                });
        }

        Axios.get(`/todos/date/${date}`)
            .then((resp) => {
                const allTodos = resp.data;
                dispatch(addBdTodo(allTodos))
                dispatch(addBdTodo(allTodos))
            });

    }, [])

    const click = useCallback((inf: number) => {
        getDate(inf)
    }, [])

    const getActive = useCallback(() => {
        if (!active) {
            Axios.get(`/todos/active`)
                .then((resp) => {
                    const allTodos = resp.data;
                    dispatch(addBdTodo(allTodos))
                    setActive(!active)
                });
        } else {
            Axios.get('/todos').then((resp) => {
                const allTodos = resp.data;
                dispatch(addBdTodo(allTodos))
                setActive(!active)
            });
        }

    }, [active])

    return (
        <section className="time-settings">
            <button className="time-settings__button" onClick={() => click(0)}>Сегодня</button>
            <button className="time-settings__button" onClick={() => click(7)}>На неделю</button>
            <div className="checkbox-wrapper">
                <input type="checkbox" className="time-settings__checkbox" id="checkbox" readOnly checked={active} onClick={getActive}/>
                <label htmlFor="checkbox" className="time-settings__label">Только невыполненные</label>
            </div>
            <form className="calendar">
                <Calendar/>
            </form>

        </section>
    )
})
