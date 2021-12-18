import React from 'react'
import { Button, NavbarBrand } from 'react-bootstrap'
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap'

const MyNav = (props) => {
    const handleChange = props.handleChange
    
    
    
    
    return (
        
        
        
        
        <div className='fixed-top' fixed='top'>
            
            <Navbar>
                <NavbarBrand>
                    Pokemon API
                </NavbarBrand>

                <Nav navbar>
                    <NavItem>
                        <NavLink>
                            home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            back to top
                        </NavLink>
                    </NavItem>
                    
                        <Button onClick={handleChange()}>
                            Sign Out
                        </Button>
                    
                </Nav>
            </Navbar>



        </div>
    )
}

export default MyNav
