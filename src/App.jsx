import { Routes, Route } from 'react-router-dom';
import React from "react";

// CSS
import './App.css'

// Page
import Layout from "./components/Layout.jsx";
import AccessLevel from "./pages/AccessLevel/AccessLevel.jsx";
import AccessLevelCreate from "./pages/AccessLevel/AccessLevelCreate.jsx";
import AccessLevelEdit from "./pages/AccessLevel/AccessLevelEdit.jsx";

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="accessLevel" element={<AccessLevel />} />
                    <Route path="accessLevel/new" element={<AccessLevelCreate />} />
                    <Route path="accessLevel/edit/:id" element={<AccessLevelEdit />} />
                </Route>
            </Routes>
        </React.Fragment>
    )
}

export default App;
