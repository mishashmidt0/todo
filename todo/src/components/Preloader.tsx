import preloaderIco from "../assets/Eclipse-1.8s-197px.svg";
import React from "react";


export const Preloader1 = React.memo(() => {
    return <div className={'prelodContainer'}>
        <img src={preloaderIco} alt="preloader"/>
    </div>
})
