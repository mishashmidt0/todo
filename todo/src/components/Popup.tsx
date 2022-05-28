import React, {FC} from 'react';

interface PopupProps {
    name: string,
    description: string,
    isdone: boolean,
    date: string
}

const Popup: FC<PopupProps> = ({name, date, description, isdone}) => {
    return (
        <div className={"shadow"}>
            <div className={'container'}>
                <div>
                    <h2 className="name">{name}</h2>

                    <time dateTime={(date.slice(0, 10))} className="datetime">{(date).slice(0, 10)}</time>
                    <div className="task-wrapper2">
                        <input type="checkbox" className="task__checkbox" checked={isdone} readOnly/>
                        <label htmlFor="task1" className="task__label"/>
                    </div>

                    <p className="description">{description}</p>
                </div>
                <div className={'buttonDiv'}>
                    <button className={'buttonCompleted'}>completed</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
