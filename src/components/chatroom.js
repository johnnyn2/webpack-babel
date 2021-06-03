/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from './chatroom/Header.jsx'
import '../css/components/chatroom.scss'

ReactDOM.render(
    <div className="chatroom">
        <Header title="Chatroom Header" />
    </div>,
    document.getElementById('react-chatroom')
)
