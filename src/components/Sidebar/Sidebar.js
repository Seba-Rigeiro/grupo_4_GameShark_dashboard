import react from 'react';
import Brand from '../Sidebar/Brand'
import NavItem from '../Sidebar/NavItem'
import Divider from '../Sidebar/Divider'

function Sidebar(){
    return (
		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* Sidebar - Brand */}
        <Brand/>

        {/* Divider */}
        <Divider/>

        {/* Nav Item - Dashboard */}
        <NavItem/>

        {/* Divider */}
        <Divider/>

        {/* Heading */}
        <div className="sidebar-heading">Acciones</div>

        {/* Nav Item - Pages */}
        <li className="nav-item">
            <a className="nav-link" href="/">
                
                <span>Pages</span>
            </a>
        </li>

        {/* Nav Item - Charts */}
        <li className="nav-item">
            <a className="nav-link" href="/">
                
                <span>Charts</span></a>
        </li>

        {/* Nav Item - Tables */}
        <li className="nav-item">
            <a className="nav-link" href="/">
                
                <span>Tables</span></a>
        </li>

        {/* Divider */}
        <Divider/>
        
    </ul> 
    )
}

export default Sidebar;