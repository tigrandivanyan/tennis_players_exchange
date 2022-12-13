import React, { useEffect, useState, cloneElement, createElement } from "react";
import clsx from "clsx";
// @ts-ignore
import styles from "./modal.module.scss";
import { useAppSelector } from "../redux/hooks";
import * as All from "./modalCombiner";
import { storeDispatch } from "../redux/store";
import { closeModal } from "../redux/slices/modalSlice";


const Modal: React.FC = () =>
{

    const [shown, setShown] = useState(false);
    const [modalClosing, setModalClosing] = useState(false);
    const modalShown: boolean = useAppSelector(state => state.modal.shown);
    const modalData: object = useAppSelector(state => state.modal.data);
    const modalType: string = useAppSelector(state => state.modal.type);

    useEffect(() =>
    {
        console.log(Object.keys(All));
    }, []);

    useEffect(() =>
    {
        console.log(modalShown);
        setModalClosing(!modalShown)
    }, [modalShown]);

    if (modalShown && !modalClosing)
    {
        return (
            <div className={clsx(styles.modalContainer, modalClosing && styles.disappear)} onClick={() => storeDispatch(closeModal({}))}>
                Modal
                <div id="child" className="child">
                    {cloneElement(createElement(All[modalType]), { data: modalData })}
                </div>
            </div>
        );
    }
    else
    {
        return <></>;
    }
};

export default Modal;