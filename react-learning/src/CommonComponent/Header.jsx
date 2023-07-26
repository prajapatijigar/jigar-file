import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Header() {
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);

    return (
        <>
            <MDBNavbar expand='lg' dark bgColor='dark ' className='py-3'>
                <MDBContainer container-fluid>
                    <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
                        <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem className='active'>
                                <MDBNavbarLink aria-current='page' href='#'>
                                     <Link className='nav-link p-3' to="/" >Home</Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>
                                     <Link className='nav-link p-3' to="/about">About</Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>
                                     <Link className='nav-link p-3' to="/example">Example</Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>
                                     <Link className='nav-link p-3' to="/menu">Menu</Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>
                                     <Link className='nav-link p-3' to="/blog">Blog</Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>
                                     <Link className='nav-link p-3' to="/shop">Shop</Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>
                                     <Link className='nav-link p-3' to="/contact">Contact</Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
} 