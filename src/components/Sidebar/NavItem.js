import react from 'react'

function NavItem(props){
    return(
        <li className="nav-item active">
            <a className="nav-link" href= {props.url}>
                {props.iconClass && <i className={props.iconClass}></i>}
                <span>{props.text}</span>
            </a>
        </li>
    )
}

export default NavItem;