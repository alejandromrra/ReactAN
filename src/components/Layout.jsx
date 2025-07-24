import {Outlet, useLocation} from 'react-router-dom';
import React from "react";

// Components
import Header from './Header';
import Sidebar from './Sidebar';

// CSS
import "/src/assets/css/Layout.css";

const Layout = () => {
    const { pathname } = useLocation();

    function showHeader() {
        if (pathname === '/') return <Header />;
    }

    return (
        <React.Fragment>
            {/*{showHeader()}*/}
            <Header />
            <div className="container-fluid app-fluid">
                <div className="row app-row">
                    <Sidebar />
                    <main className="col-md-9">
                        <Outlet />
                    </main>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout;