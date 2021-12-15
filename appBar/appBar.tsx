"use strict";

import React from "react";
import store from "store";
import AppBarComponent from './appBar-component';
import ErrorAlert from "@/component/errorAlert";
import { Outlet } from "react-router-dom";
import "./resource/appBar.scss";

let AlertThis = []; // 传递方法到下层
let webSocket: Array<WebSocket> = []; // 传递方法到下层

export interface WebSocketResponse {
    type: string,
    message: string,
    data: any,
}

export default function AppBars() {
    
    const themes: "themeLight" | "themeDark" = store.get('nemp_theme').nemp_themes;

    const [openMessagesAlert, setOpenMessagesAlert] = React.useState(false);
    const [messages, setMessages] = React.useState({
        severity: "error",
        message: "error",
    });
    const {severity, message} = messages;
    
    const handleMessages = (severity, message) => {
        setMessages({
            severity: severity,
            message: message,
        });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenMessagesAlert(false);
    };

    React.useEffect(() => {
        if (AlertThis.length !== 0) {
            AlertThis = [];
            AlertThis.push(handleMessages, handleClose, setOpenMessagesAlert); 
        } else {
            AlertThis.push(handleMessages, handleClose, setOpenMessagesAlert);
        }        
    }, []);

    React.useEffect(() => {

        const token = store.get("nemp-token");

        // Create WebSocket connection.
        const socket = new WebSocket('ws://127.0.0.1:8190/webSocketRequestConnect?Authorization=' + token);

        // Listen for messages
        socket.addEventListener('message', function (event) {          
            const obj: string = event.data;
            const response: WebSocketResponse = JSON.parse(obj);
            console.log('[Message from server]', response);
            if (response.type === "connect.success") {
                if (webSocket.length !== 0) {
                    webSocket = [];
                    webSocket.push(socket);
                } else {
                    webSocket.push(socket);
                }
            }
        });

        return () => {
            socket.close();
        }
    }, []);

    return (
        <div className={"nemp-appBar"}>
            <AppBarComponent themes={themes}/>
            <ErrorAlert 
                openMessagesAlert={openMessagesAlert}
                handleClose={handleClose}
                severity={severity}
                message={message}
            />
            <Outlet />
        </div>
    );
};

export {
    webSocket,
    AlertThis
};