import react from 'react';
import Brand from '../Sidebar/Brand'
import NavItem from '../Sidebar/NavItem'
import Divider from '../Sidebar/Divider'

function Sidebar(){
    return (
		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
        <Brand/>
        <Divider/>
        <NavItem url="/" iconClass="fas fa-fw fa-tachometer-alt" text="Dashboard - GameShark"/>
        <Divider/>

        {/* Heading */}
        <div className="sidebar-heading">Acciones</div>

        {/* Nav Item - Pages */}
        <NavItem url="/pages" text="Pages"/>
        <NavItem url="/charts" text="Charts"/>
        <NavItem url="/tables" text="Tables"/>
        <Divider/>
        
    </ul> 
    )
}

export default Sidebar;