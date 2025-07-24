import { Routes, Route } from 'react-router-dom';
import React from "react";

// CSS
import './App.css'

// Page
import Layout from "./components/Layout.jsx";
import AccessLevel from "./pages/AccessLevel/AccessLevel.jsx";

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="accessLevel" element={<AccessLevel />} />
                </Route>
            </Routes>
        </React.Fragment>
    )
}

export default App;
