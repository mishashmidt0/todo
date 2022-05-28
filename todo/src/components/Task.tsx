import React, {FC, useState} from "react";
import "./style/taskStyle.css"
import {Axios} from "../core/core";
import {changeIsDoneTask} from "../redux/todo-reducer";
import {useDispatch} from "react-redux";
import Popup from "./Popup";

type TaskProps = {
    id: number,
    name: string,
    shortdesc: string,
    description: string,
    isdone: boolean,
    date: string
}
export const Task: FC<TaskProps> = React.memo(({id, name, date, description, isdone, shortdesc}) => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setIsActive] = useState(isdone)


    function click() {
        Axios.post(`/todos/update/${id}/${!isdone}`)
            .then((resp) => {
            })
        dispatch(changeIsDoneTask(id, isActive))
    }


    function openWindow(e: any) {
        const root = document.getElementById('root');

        switch (e.target.classList[0]) {
            case 'task__description':
            case 'task':
            case 'task__name':
                setIsOpen(!isOpen);
                (root as Element).classList.add("hidden")
                break
            case 'task__checkbox':
                setIsActive(!isActive)
                click()
                break
            case 'shadow':
                setIsOpen(!isOpen);
                (root as Element).classList.remove("hidden")
                break
        }

    }

    const date1 = [new Date(date).getFullYear().toString(), (new Date(date).getMonth() + 1).toString(), new Date(date).getDate().toString()]

    function addZero(date: string[]) {
        return date.map((el, index) => {
            if (index === 0) return el;
            if (el.toString().length === 1) return el = 0 + el;
            return el
        })
    }

    const newDate = addZero(date1).join('-')

    return (
        <article className="task" onClick={openWindow}>
            <div className="task-wrapper">
                <h2 className="task__name">{name}</h2>
                <p className="task__description">{shortdesc}</p>
            </div>
            <div className="task-wrapper2">
                <input type="checkbox" className="task__checkbox" checked={isActive} readOnly/>
                <label htmlFor="task1" className="task__label"/>

                <time dateTime={newDate} className="task__datetime">{newDate}</time>
            </div>
            {isOpen && <Popup name={name} isdone={isActive} description={description} date={newDate}/>}
        </article>
    )
})
