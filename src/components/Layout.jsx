import {Link, Outlet, useLocation} from 'react-router-dom';
import React, {useState} from "react";

// Components
import Header from './Header';
import Sidebar from './Sidebar';

// CSS
import "/src/assets/css/components/Layout.css";

const Layout = () => {
    //const { pathname } = useLocation();
    const [visible, setVisible] = useState(true);

    const handleClick = () => {
        setVisible(false); // lo escondemos al hacer click
    };

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
                    <main className="col-md-12">
                        {visible && (
                            <Link className="btn btn-primary w-50" to="/gameYear" onClick={handleClick}>PRESIONA EL BOTÓN</Link>
                        )}
                        <Outlet/>
                    </main>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout;