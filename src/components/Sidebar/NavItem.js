import react from 'react'

function NavItem(){
    return(
        <li className="nav-item active">
            <a className="nav-link" href="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard - GameShark</span></a>
        </li>
    )
}

export default NavItem;