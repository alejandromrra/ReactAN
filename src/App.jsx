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
import GameSecondQues from "./pages/AXL/gameSecondQues.jsx";
import GameThirdQues from "./pages/AXL/gameThirdQues.jsx";
import GameFourthQues from "./pages/AXL/gameFourthQuest.jsx";
import GameFifthQues from "./pages/AXL/gameFifthQues.jsx";
import GameSixthQues from "./pages/AXL/gameSixthQues.jsx";
import GameSeventhQues from "./pages/AXL/gameSeventhQues.jsx";
import GameEighthQues from "./pages/AXL/gameEighthQues.jsx";
import GameNineQues from "./pages/AXL/gameNineQues.jsx";
import GameTenthQues from "./pages/AXL/gameTenthQues.jsx";
import GameEleventhQues from "./pages/AXL/gameEleventhQues.jsx";

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
                    <Route index path="gameYear/2" element={<GameSecondQues />} />
                    <Route index path="gameYear/3" element={<GameThirdQues />} />
                    <Route index path="gameYear/4" element={<GameFourthQues />} />
                    <Route index path="gameYear/5" element={<GameFifthQues />} />
                    <Route index path="gameYear/6" element={<GameSixthQues />} />
                    <Route index path="gameYear/7" element={<GameSeventhQues />} />
                    <Route index path="gameYear/8" element={<GameEighthQues />} />
                    <Route index path="gameYear/9" element={<GameNineQues />} />
                    <Route index path="gameYear/10" element={<GameTenthQues />} />
                    <Route index path="gameYear/11" element={<GameEleventhQues />} />
                    <Route index path="gameYear/12" element={<GameNineQues />} />
                    <Route index path="gameYear/correctQuestion" element={<GameCorrectResponse />} />
                    <Route index path="gameYear/incorrectQuestion" element={<GameIncorrectResponse />} />
                </Route>
            </Routes>
        </React.Fragment>
    )
}

export default App;
