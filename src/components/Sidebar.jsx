import React from "react";
import {Link, useLocation} from 'react-router-dom';

// CSS
import "/src/assets/css/Sidebar.css"

const Sidebar = () => {
    const { pathname } = useLocation();

    const commonLinks = [
        { path: '/', label: 'Admin Section' },
        { path: '/accessLevel', label: 'Access Level' },
        { path: '/', label: 'Card List' },
        { path: '/', label: 'Card Routes' },
        { path: '/', label: 'Commerce Numbers' },
        { path: '/', label: 'Commissions' },
        { path: '/', label: 'Pinpads' },
        { path: '/', label: 'Report and Graphics' },
        { path: '/', label: 'Terminals' },
        { path: '/', label: 'Totals' },
        { path: '/', label: 'Transactions' },
        { path: '/', label: 'Users' },
        { path: '/', label: 'Log out' },
    ];

    const accessLevelLinks = [
        { path: '', label: 'Inicio' },
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
        <aside className="navbar col-md-3" key={page}>
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