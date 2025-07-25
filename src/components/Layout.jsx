import {Outlet, useLocation} from 'react-router-dom';
import React from "react";

// Components
import Header from './Header';
import Sidebar from './Sidebar';

// CSS
import "/src/assets/css/components/Layout.css";

const Layout = () => {
    const { pathname } = useLocation();

    return (
        <React.Fragment>
            <Header/>
            <div className="container-fluid app-fluid">
                <div className="row app-row">
                    <Sidebar/>
                    <main className="col-md-9" id={pathname === "/accessLevel/new" ? "createAccessLevel" : "test"}>
                        <Outlet/>
                    </main>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout;