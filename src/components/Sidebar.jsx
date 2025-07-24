import React from "react";
import {Link, useLocation} from 'react-router-dom';

// CSS
import "/src/assets/css/Sidebar.css"

const Sidebar = () => {
    const { pathname } = useLocation();

    const commonLinks = [
        { path: '/', label: 'Inicio' },
        { path: '/accessLevel', label: 'Access Level' },
    ];

    const accessLevelLinks = [
        { path: '', label: '<--' },
        { path: '/accessLevel/find', label: 'Find Access Level' },
        { path: '/accessLevel/new', label: 'New Access Level' },
        { path: '/accessLevel/map', label: 'Access Level Map' },
        { path: '/accessLevel/commerce', label: 'List Commerce Numbers' },
        { path: '/accessLevel/pinpads', label: 'List Pinpads' },
        { path: '/accessLevel/terminals', label: 'List Terminals' },
        { path: '/accessLevel/userMenu', label: 'User Menu' },
    ];

    const links = pathname.startsWith('/accessLevel') ? accessLevelLinks : commonLinks;
    const page = pathname.startsWith('/accessLevel') ? "Access Level" : "";

    return (
        <aside className="navbar col-md-3">
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                 aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-body">
                    {pathname !== "/" && <h1 className="mb-5">{page}</h1>}

                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        {links.map(({ path, label }, index) => (
                            <li className="nav-item" key={path || index}>
                                <Link className="nav-link" to={path}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;