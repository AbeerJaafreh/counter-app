import React from 'react';

//Stateless Functional Component 
const NavBar=props=>{
    console.log('NavBar - Rendered');

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="$">
            Navbar{" "}
                <span className="badge badge-pill badge-secondary">
                    {props.totalCounter}
                </span>
            </a>
        </nav> 
    );
};


// class NavBar extends Component {
//     render() {   
        
//     }
// }
 
export default NavBar;