import { ApiProvider } from "@reduxjs/toolkit/query/react"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApiSlice } from "./store/store.js"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ApiProvider api={ApiSlice}>
            <App />
        </ApiProvider>
    </React.StrictMode>
)
