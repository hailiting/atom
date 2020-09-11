import React from "react";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
declare type AnimationName = "zoom-in-top" | "zoom-in-left" | "zoom-in-bottom" | "zoom-in-right";
declare type TransitionExtendProps = {
    animation?: AnimationName;
    wrapper?: boolean;
};
declare type TransitionProps = TransitionExtendProps & CSSTransitionProps;
declare const Transition: React.FC<TransitionProps>;
export default Transition;
