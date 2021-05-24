import React from 'react';
import './Chat.css';
import { useState } from "react";
import { IconButton } from '@material-ui/core';
import MicNoneIcon from "@material-ui/icons/MicNone";


function Chat() {
    const [input, setInput] = useState("");
    const sendMessage =(e) =>{
        e.preventDefault();

    setInput("");

        //Firebase magic...
    };
    
    return (
        <div className="chat">
            <div className="chat_header">
                <h4>
                    Para: <span className="chat_name">Nombre del canal</span>
                </h4>
                <strong>Detalles</strong>
            </div>

            <div className="chat_message">
                <h2>Soy un mensaje</h2>
                <h2>Soy un mensaje</h2>
                <h2>Soy un mensaje</h2>
                <h2>Soy un mensaje</h2>
                <h2>Soy un mensaje</h2>
                <h2>Soy un mensaje</h2>
                <h2>Soy un mensaje</h2>
            </div>

            <div className="chat_input">
                <form>
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Escribe tu mensaje" type="text" />
                    <button onclick={sendMessage}>Enviar mensaje</button>   
                    
                </form>

                
                 
                 <IconButton>
                   <MicNoneIcon className="chat_mic" />
                 </IconButton>
            </div>
            
        </div>
    )
}

export default Chat
