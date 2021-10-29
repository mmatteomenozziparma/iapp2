import React from 'react'
import {
BrowserRouter as Router,
Switch,
Route,
useParams,
} from "react-router-dom";
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap'
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import LogIn from './LogIn'
import SignIn from  './SignIn'
class menu extends React.Component{
render(){
return(
<div>
<div className="row">
<div className="col-md-12">
<Router>
<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
<Navbar.Brand href="#home">React Bootstrap Navbar - Tutsmake.com</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
<Nav.Link href="/">Home</Nav.Link>
<Nav.Link href="/about-us">Contact Us</Nav.Link>
<Nav.Link href="/contact-us">About Us</Nav.Link>
</Nav>
<Form inline>
<FormControl type="Click" placeholder='SignIn' className="mr-sm-2" />
<Button href="/SignIn" >SignIn</Button>
</Form>
<Form inline>
<FormControl type="Click" placeholder='LogIn' className="mr-sm-2" />
<Button href="/LogIn" >LogIn</Button>
</Form>
</Navbar.Collapse>
</Navbar>
<br />
<Switch>
<Route exact path="/">
<Home />
</Route>
<Route path="/about-us">
<AboutUs />
</Route>
<Route path="/contact-us">
<ContactUs />
</Route>
<Route path="/SignIn">
<SignIn />
</Route>
<Route path="/LogIn">
<LogIn />
</Route>
</Switch>
</Router>
</div>
</div>
</div>
)  
}
}
export default menu;
