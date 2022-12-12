import React, { useEffect, useState, cloneElement, createElement } from "react";
import { useAppSelector } from "../redux/hooks";
import * as All from './modalCombiner';


const Modal: React.FC = () => {

    const [shown, setShown] = useState(false);
    const [animating, setAnimating] = useState(false);
    const modalShown: boolean = useAppSelector(state => state.modal.shown);
    const modalData: object = useAppSelector(state => state.modal.data);
    const modalType: string = useAppSelector(state => state.modal.type);

    useEffect(() => {
        console.log(Object.keys(All))
    }, [])

    useEffect(() => {

    }, [modalShown])

    if(shown){

    }

    return(
        <div className="dark-background">
            Modal
            <div id="child" className="child">
                {/*{React.isValidElement(children) ? React.cloneElement(children as any, {})}*/}
            </div>
            {cloneElement(createElement(All[modalType]))}
        </div>
    );
}

export default Modal;