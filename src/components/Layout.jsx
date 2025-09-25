import {Link, Outlet, useLocation} from 'react-router-dom';
import React, {useEffect} from "react";

// Components
import Header from './Header';
import Sidebar from './Sidebar';

// CSS
import "/src/assets/css/components/Layout.css";

const Layout = () => {
    const pathname = useLocation().pathname;

    useEffect(() => {
        const gameYearArray = [
            { id: 1, respuesta: "La Santa" },
            { id: 2, respuesta: "Mirador de Tres metros sobre el cielo" },
            { id: 3, respuesta: "Rapunzel, Anillo Pandora" },
            { id: 4, respuesta: "Corazón" },
            { id: 5, respuesta: "" },
            { id: 6, respuesta: "" },
            { id: 7, respuesta: "" },
            { id: 8, respuesta: "" },
            { id: 9, respuesta: "" },
            { id: 10, respuesta: "" },
            { id: 11, respuesta: "" },
            { id: 12, respuesta: "" },
        ];

        localStorage.setItem("gameYear", JSON.stringify(gameYearArray));
        localStorage.setItem("lives", JSON.stringify(2));
    });

    return (
        <React.Fragment>
            {/*<Header/>
            <div className="container-fluid app-fluid">
                <div className="row app-row">
                    <Sidebar/>
                    <main className="col-md-9" id={pathname.includes("/accessLevel/") ? "createAccessLevel" : ""}>
                        <Outlet/>
                    </main>
                </div>
            </div>*/}
            <div className="container-fluid app-fluid">
                <div className="row app-row">
                    <main>
                        {pathname === "/"  && (
                            <Link className="btn btn-primary w-50" to="/gameYear">PRESIONA EL BOTÓN</Link>
                        )}
                        <Outlet/>
                    </main>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout;