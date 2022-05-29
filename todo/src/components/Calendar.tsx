import {RangeDatePicker} from '@y0c/react-datepicker';
import React, {useCallback, useEffect, useState} from "react";
import {Axios} from "../core/core";
import {addBdTodo} from "../redux/todo-reducer";
import {useDispatch} from "react-redux";

export const Calendar = React.memo(() => {
    const [date, setDate] = useState<string[]>()
    const dispatch = useDispatch()

    const getDate=useCallback((start: any, end: any) =>{
        if (!end) return
        const date1 = [new Date(start).getFullYear().toString(), (new Date(start).getMonth() + 1).toString(), new Date(start).getDate().toString()]
        const date2 = [new Date(end).getFullYear().toString(), (new Date(end).getMonth() + 1).toString(), new Date(end).getDate().toString()]

        function addZero(date: string[]) {
            return date.map((el, index) => {
                if (index === 0) return el;
                if (el.toString().length === 1) return el = 0 + el;
                return el
            })
        }

        const st = addZero(date1).join('-')
        const en = addZero(date2).join('-')
        setDate([st, en])
    },[])

    useEffect(() => {
        if (!date) return

        Axios.get(`/todos/date/${date[0]}/${date[1]}`)
            .then((resp) => {
                const allTodos = resp.data;
                dispatch(addBdTodo(allTodos))
            });

    }, [date])

    return (
        <RangeDatePicker
            startText="Start" endText="End"
            startPlaceholder="Start Date"
            endPlaceholder="End Date"
            onChange={getDate}

        />
    )
})
