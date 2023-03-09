import React from "react";

import "./Modal.css";
import {CSSTransition} from "react-transition-group";
// import {Transition} from "react-transition-group";

const animationTiming = {
    enter: 400,
    exit: 1000
}

const modal = props => {
    const cssClasses = [
        "Modal",
        // props.show ? "ModalOpen" : "ModalClosed"
        // props.show === 'entering'
        //     ? "ModalOpen"
        //     : props.show === 'exiting' ? "ModalClosed" : null
    ];

    return (
        <CSSTransition
            mountOnEnter
            unmountOnExit
            in={props.show}
            timeout={animationTiming}
            // classNames={"fade-slide"}
            classNames={{
                enter: '',
                enterActive: 'ModalOpen',
                exit: '',
                exitActive: 'ModalClosed',
                // appear: // use it when component is attached at the first time
                // appearActive:
            }}
        >
            <div className={"Modal"}>
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>
                    Dismiss
                </button>
            </div>

        </CSSTransition>
        // <Transition
        //     mountOnEnter
        //     unmountOnExit
        //     in={props.show}
        //     timeout={animationTiming}
        // >
        //     {state => {
        //         const cssClasses = [
        //             "Modal",
        //             state === 'entering' ? 'ModalOpen' : state === 'exiting' ? 'ModalClosed' : null
        //         ];
        //         return (
        //             <div className={cssClasses.join(' ')}>
        //                 <h1>A Modal</h1>
        //                 <button className="Button" onClick={props.closed}>
        //                     Dismiss
        //                 </button>
        //             </div>
        //         );
        //     }}
        //
        // </Transition>
    );
};

export default modal;
