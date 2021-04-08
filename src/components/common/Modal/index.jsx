import React, { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

import "./style.scss";

const Portal = (props) => {
    const { children } = props;
    const element = useMemo(() => document.createElement("div"), []);
    const body = document.getElementsByTagName("body")[0];

    useEffect(() => {
        element.classList.add("a-modal-root");
        document.body.appendChild(element);

        if (body.scrollHeight > window.innerHeight) {
            body.style.overflow = "hidden";
            body.style.paddingRight = "17px";
        }

        return () => {
            document.body.removeChild(element);

            if (body.scrollHeight > window.innerHeight) {
                body.style.overflow = "auto";
                body.style.paddingRight = "0";
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [element]);

    return createPortal(children, element);
};

const Modal = (props) => {
    const { children } = props;

    const onHandleClose = () => {
    };

    return (
        <Portal>
            <div className="a-modal-wrap">
                <div className="a-modal-overlay" onClick={onHandleClose} />
                <div className="a-modal">{children}</div>
            </div>
        </Portal>
    );
};

export default Modal;
