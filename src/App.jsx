import { Routes, Route } from 'react-router-dom';
import React from "react";

// CSS
import './App.css'

// Page
import Layout from "./components/Layout.jsx";
import AccessLevel from "./pages/AccessLevel/AccessLevel.jsx";
import AccessLevelCreate from "./pages/AccessLevel/AccessLevelCreate.jsx";
import AccessLevelEdit from "./pages/AccessLevel/AccessLevelEdit.jsx";
import AccessLevelView from "./pages/AccessLevel/AccessLevelView.jsx";
import GameYear from "./pages/AXL/gameYear.jsx";
import GameFirstQues from "./pages/AXL/gameFirstQues.jsx";
import GameCorrectResponse from "./pages/AXL/gameCorrectResponse.jsx";
import GameIncorrectResponse from "./pages/AXL/gameIncorrectResponse.jsx";

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="accessLevel" element={<AccessLevel />} />
                    <Route path="accessLevel/new" element={<AccessLevelCreate />} />
                    <Route path="accessLevel/view/:id" element={<AccessLevelView />} />
                    <Route path="accessLevel/edit/:id" element={<AccessLevelEdit />} />
                    <Route index path="gameYear" element={<GameYear />} />
                    <Route index path="gameYear/1" element={<GameFirstQues />} />
                    <Route index path="gameYear/1" element={<GameSe />} />
                    <Route index path="gameYear/correctQuestion" element={<GameCorrectResponse />} />
                    <Route index path="gameYear/incorrectQuestion" element={<GameIncorrectResponse />} />
                </Route>
            </Routes>
        </React.Fragment>
    )
}

export default App;
