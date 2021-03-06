import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../components/images/logo/Screenshot (69).png'



import './Header.css'

import Menus from '../../../components/Menu/Menus';

const Header = () => {
    const {user,logOut} = useAuth()
    const navigate =useNavigate();
    const loginHandler=()=>{
        navigate('/login')
    }
    return (
        <div>
            

            <Navbar sticky="top" collapseOnSelect expand="lg" bg="myRed"  >
                <Container>
                    <Navbar.Brand as={HashLink} to="/" className="fs-1"> <span className="text-black"><img style={{height:'80px',borderRadius:'40px'}} src={logo} alt="" /></span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={HashLink} to="/"><span className=" fw-bold fs-5" >Home</span></Nav.Link>
                            <Nav.Link as={HashLink} to="/glasses"><span className="fw-bold fs-5" >Glasses</span></Nav.Link>
                            <Nav.Link as={HashLink} to="/#latest"><span className=" fw-bold fs-5" >Exclusive Collection</span></Nav.Link>
                            <Nav.Link as={HashLink} to="/dashboard"><span className=" fw-bold fs-5" >Dashboard</span></Nav.Link>

                        </Nav>


            <div className=" w-full d-flex  justify-content-center">
            {user.email &&
                            <div> 
                                 <Menus></Menus>
                                 {/* <Nav className=""><h1 onClick={logOut} className="btn btn-outline-danger w-100 fw-bold ">Logout </h1></Nav> */}

                            </div>
                        }
                        
                       {!user.email &&
                            <Nav className="">
                                <h1 onClick={loginHandler} className="btn btn-outline-dark w-100 fw-bold ">Login </h1>
                            {/* <Nav.Link  as={HashLink} to="/login" className="btn btn-outline-dark" >Login</Nav.Link> */}
                        
                        </Nav>
                       
                       } 
            </div>


                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;