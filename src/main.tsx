import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// load yook fonts
import '@yookgmbh/storefront-components/bundle/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
