import {useState} from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse, MDBNavbarBrand,
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";


const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    return (
        <MDBNavbar expand='lg' light bgColor='light' className="fs-5">
            <MDBContainer fluid>
                <MDBNavbarBrand className="pt-1">
                    <Link to="/">
                        <h2>Split It</h2>
                    </Link>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNav(!openNav)}
                >
                    <MDBIcon icon='bars' fas/>
                </MDBNavbarToggler>
                <MDBCollapse navbar open={openNav}>
                    <MDBNavbarNav className="justify-content-center">
                        <MDBNavbarItem>
                            <MDBNavbarLink aria-current='page' href='#'>
                                Dashboard
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Profile</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Groups</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to="/login">
                                <MDBNavbarLink>Login</MDBNavbarLink>
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to="/register">
                                <MDBNavbarLink>Register</MDBNavbarLink>
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Logout</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}
export default Navbar
