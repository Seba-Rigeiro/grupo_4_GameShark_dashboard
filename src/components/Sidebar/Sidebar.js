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

        {/* Head */}
        <div className="sidebar-heading">Acciones</div>

        {/* Links */}
        <NavItem url="/usuarios" text="Usuarios"/>
        <NavItem url="/juegos" text="Juegos"/>
        <NavItem url="/extra" text="Extras"/>
        <Divider/>
        
    </ul> 
    )
}

export default Sidebar;