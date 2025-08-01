import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'

// Routing
import {BrowserRouter} from 'react-router-dom';

// CSS
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>,
)
