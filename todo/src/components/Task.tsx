import React, {FC, useState} from "react";
import "./style/taskStyle.css"
import {Axios} from "../core/core";
import {changeIsDoneTask} from "../redux/todo-reducer";
import {useDispatch} from "react-redux";

type TaskProps = {
    id: number,
    name: string,
    shortdesc: string,
    description: string,
    isdone: boolean,
    date: string
}
export const Task: FC<TaskProps> = React.memo(({id, name, date, description, isdone, shortdesc}) => {

    const [isDone, setIsDone] = useState(isdone)
    const dispatch = useDispatch()

    function click() {
        setIsDone(!isDone)
        // Axios.post('/update').then((resp) => {
        //     dispatch(changeIsDoneTask(id, isDone))
        // });
    }

    return (
        <article className="task">
            <div className="task-wrapper">
                <h2 className="task__name">{name}</h2>
                <p className="task__description">{shortdesc}</p>
            </div>
            <div className="task-wrapper2">
                <input type="checkbox" className="task__checkbox" checked={isDone} onClick={click} readOnly/>
                <label htmlFor="task1" className="task__label"/>
                <time dateTime={(date.slice(0, 10))} className="task__datetime">{(date).slice(0, 10)}</time>
            </div>
        </article>
    )
})
