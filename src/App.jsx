// CSS
import './App.css'

// Componentes
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import PageContent from "./components/PageContent.jsx";

function App() {
    return (
        <div>
            <Header />
            <div className="container-fluid app-fluid">
                <div className="row app-row">
                    <Sidebar />
                    <PageContent />
                </div>
            </div>
        </div>
    )
}

export default App;
