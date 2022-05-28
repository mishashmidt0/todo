import React, {FC, MouseEvent, useState} from "react";
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

    const [activeTask, setActiveTask] = useState(isdone)
    const [isOpen, setIsOpen] = useState(false)


    function click() {
        // Axios.post('/update').then((resp) => {
        //     dispatch(changeIsDoneTask(id, isDone))
        // });
    }


    function openWindow(e: any) {
        console.log(e.target.classList)
        const root = document.getElementById('root');

        switch (e.target.classList[0]) {
            case 'task__description':
            case 'task':
            case 'task__name':
                setIsOpen(!isOpen);
                (root as Element).classList.add("hidden")
                break
            case 'task__checkbox':
                setActiveTask(!activeTask);
                break
            case 'shadow':
                setIsOpen(!isOpen);
                (root as Element).classList.remove("hidden")
                break
        }

    }

    return (
        <article className="task" onClick={openWindow}>
            <div className="task-wrapper">
                <h2 className="task__name">{name}</h2>
                <p className="task__description">{shortdesc}</p>
            </div>
            <div className="task-wrapper2">
                <input type="checkbox" className="task__checkbox" checked={activeTask} readOnly/>
                <label htmlFor="task1" className="task__label"/>
                <time dateTime={(date.slice(0, 10))} className="task__datetime">{(date).slice(0, 10)}</time>
            </div>
            {isOpen && <Popup name={name} isdone={activeTask} description={description} date={date}/>}
        </article>
    )
})
