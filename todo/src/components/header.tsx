import "./style/header.css"
import React, {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {Axios} from "../core/core";
import {addBdTodo} from "../redux/todo-reducer";

export const Header = React.memo(() => {
    const [value, setValue] = useState<string>('')
    const dispatch = useDispatch()

    const changeSearch=useCallback((el: any)=> {
        setValue(el.currentTarget.value)
    },[])

    useEffect(() => {
        const url = !value ? `/todos` : `/todos/find/${value}`;
        Axios.get(url)
            .then((resp) => {
                const allTodos = resp.data;
                dispatch(addBdTodo(allTodos))
            });
    }, [value]);

    return (
        <header className="header">
            <div className="search-bar">
                <div className="search-bar__icon">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.0815 16.8077C20.6549 14.6604 21.3596 11.998 21.0547 9.35332C20.7497 6.70862 19.4575 4.27661 17.4367 2.54384C15.4158 0.81107 12.8153 -0.0946645 10.1554 0.00783994C7.49555 0.110344 4.97245 1.21353 3.0909 3.09668C1.20936 4.97984 0.108137 7.50409 0.00755033 10.1644C-0.0930364 12.8247 0.814431 15.425 2.5484 17.4449C4.28237 19.4648 6.71497 20.7554 9.35951 21.0585C12.0041 21.3616 14.6655 20.6549 16.8115 19.0797H16.8098C16.8586 19.1447 16.9106 19.2065 16.9691 19.2666L23.2251 25.5235C23.5298 25.8284 23.9431 25.9998 24.3742 26C24.8052 26.0002 25.2187 25.829 25.5236 25.5243C25.8285 25.2196 25.9998 24.8062 26 24.3751C26.0002 23.944 25.8291 23.5305 25.5244 23.2255L19.2684 16.9686C19.2103 16.9098 19.1478 16.8555 19.0815 16.8061V16.8077ZM19.5007 10.5606C19.5007 11.7344 19.2696 12.8967 18.8204 13.9812C18.3713 15.0656 17.713 16.051 16.8831 16.881C16.0532 17.711 15.068 18.3694 13.9837 18.8186C12.8994 19.2678 11.7372 19.499 10.5636 19.499C9.38992 19.499 8.22776 19.2678 7.14346 18.8186C6.05915 18.3694 5.07392 17.711 4.24403 16.881C3.41414 16.051 2.75583 15.0656 2.3067 13.9812C1.85756 12.8967 1.6264 11.7344 1.6264 10.5606C1.6264 8.18996 2.56799 5.91644 4.24403 4.24016C5.92008 2.56388 8.19328 1.62216 10.5636 1.62216C12.9338 1.62216 15.207 2.56388 16.8831 4.24016C18.5591 5.91644 19.5007 8.18996 19.5007 10.5606V10.5606Z"
                            fill="#DDDDDD"/>
                    </svg>
                </div>
                <input type="text" placeholder="Поиск" className="search-bar__input" onChange={changeSearch} value={value}/>
            </div>

            <div className="avatar">
                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.5 0C8.736 0 0 8.736 0 19.5C0 30.264 8.736 39 19.5 39C30.264 39 39 30.264 39 19.5C39 8.736 30.264 0 19.5 0ZM19.5 5.85C22.737 5.85 25.35 8.463 25.35 11.7C25.35 14.937 22.737 17.55 19.5 17.55C16.263 17.55 13.65 14.937 13.65 11.7C13.65 8.463 16.263 5.85 19.5 5.85ZM19.5 33.54C14.625 33.54 10.3155 31.044 7.8 27.261C7.8585 23.3805 15.6 21.255 19.5 21.255C23.3805 21.255 31.1415 23.3805 31.2 27.261C28.6845 31.044 24.375 33.54 19.5 33.54Z"
                        fill="#4D4D4D"/>
                </svg>
            </div>
        </header>
    )
})
