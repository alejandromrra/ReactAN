import React from "react";
import {Link, useLocation} from 'react-router-dom';

// CSS
import "/src/assets/css/components/Sidebar.css"

const Sidebar = () => {
    const { pathname } = useLocation();

    const navLinks = [
        {
            match: (path) => path.startsWith('/accessLevel/'),
            page: 'Add Access Level',
            links: [
                { path: '/accessLevel', label: 'List Access Levels' },
                { path: '/accessLevel/terminals', label: 'List Terminals' },
                { path: '/accessLevel/pinpads', label: 'List Pinpads' },
                { path: '/accessLevel/commerce', label: 'List Commerce Numbers' },
                { path: '/accessLevel/userMenu', label: 'User Menu' },
            ],
        },
        {
            match: (path) => path.startsWith('/accessLevel'),
            page: 'Access Level',
            links: [
                { path: '', label: 'Inicio' },
                { path: '/accessLevel/find', label: 'Find Access Level' },
                { path: '/accessLevel/new', label: 'New Access Level' },
                { path: '/accessLevel/map', label: 'Access Level Map' },
                { path: '/accessLevel/commerce', label: 'List Commerce Numbers' },
                { path: '/accessLevel/pinpads', label: 'List Pinpads' },
                { path: '/accessLevel/terminals', label: 'List Terminals' },
                { path: '/accessLevel/userMenu', label: 'User Menu' },
            ],
        },
        {
            match: () => true, // fallback / default
            page: '',
            links: [
                { path: '/a', label: 'Admin Section' },
                { path: '/accessLevel', label: 'Access Level' },
                { path: '/b', label: 'Card List' },
                { path: '/c', label: 'Card Routes' },
                { path: '/d', label: 'Commerce Numbers' },
                { path: '/e', label: 'Commissions' },
                { path: '/f', label: 'Pinpads' },
                { path: '/g', label: 'Report and Graphics' },
                { path: '/h', label: 'Terminals' },
                { path: '/i', label: 'Totals' },
                { path: '/j', label: 'Transactions' },
                { path: '/k', label: 'Users' },
                { path: '/l', label: 'Log out' },
            ],
        }
    ];

    const { links, page } = navLinks.find(cfg => cfg.match(pathname));

    return (
        <aside className="navbar col-md-3" key={page}>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                 aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-body">
                    {pathname !== "/" && <h1 className="sidebarTitle mb-5">{page}</h1>}

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