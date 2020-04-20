import React, {useReducer} from 'react';
import {AlertContext} from "./AlertContext";
import {AlertReduser} from "./AlertReduser";
import {HIDE_ALERT, SHOW_ALERT} from "../types";

const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(AlertReduser, null)

    const hide = () => dispatch({type: HIDE_ALERT})

    const show = (text, type = 'secondary') => {
        dispatch({
            type: SHOW_ALERT,
            payload: {type, text}
        })
    }

    return (
        <AlertContext.Provider value={{
            hide, show, alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}
export default AlertState;