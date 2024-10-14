import './style.css'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { Cookies, useCookies } from 'react-cookie';

const Header = (c) => {
	const jump=useNavigate();
	//const [cookie,setcookie,removecookie]=useCookies();
	//function delrecord(){
	//	if(cookie=="usercookie"){
	//	removecookie("usercookie");
    //    jump("/");
	//}
	//}
	//const [srch, setsrch]=useState("");
	//const fun1=(e)=>{
	//	setsrch(e.target.value);
	//}
	return (
		<>
			<div className="container-fluid bg-primary text-light">
				<div className="row">

					<div className="col-md-12 bg-dark">
						<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
							<div className="container-fluid">
								<a className="navbar-brand fntsze " href="#">
									<img src='images/logo.png' className='pic4' /></a>
								<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
									<span className="navbar-toggler-icon"></span>
								</button>
								<div className="collapse navbar-collapse" id="collapsibleNavbar">
									<ul className="navbar-nav">
										<li className="nav-item">
											<Link className="nav-link fntsze" to="/">Home</Link>
										</li>
										<li>
										<input type='search' placeholder='search'/>
										</li>
										<li className="nav-item">
											<Link className="nav-link fntsze" to="/about">About Us</Link>
										</li>
										<li className="nav-item dropdown fntsze">
											<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Our Products</a>
											<ul class="dropdown-menu">
												<li><Link className="dropdown-item fntsze" to="/product">Our Products</Link></li>
												<li><a className="dropdown-item fntsze" href="#">Another link</a></li>
												<li><a className="dropdown-item fntsze" href="#">A third link</a></li>
											</ul>
										</li>
										<li className="nav-item ">
											<Link className="nav-link fntsze" to="/contact">Contact</Link>
										</li>
									</ul>
									<ul className="nav ms-auto">
										<li><Link to="/cart"><img src="images/cart.jpeg" style={{ width: "40px" }} /><span class="badge bg-danger rounded-circle" style={{ position: "relative", left: "-25px", top: "-12px" }}>{c.citem}</span></Link></li>
									</ul>
									<ul>
										<Dropdown>
											<Dropdown.Toggle variant="warning" id="dropdown-center">
												Account
											</Dropdown.Toggle>

											<Dropdown.Menu>
												<Dropdown.Item href="/usignup">Signup/login</Dropdown.Item>
												<Dropdown.Item>Logout</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</ul>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</>
	)
}

const Footer = () => {
	return (
		<>
			<div className="bg-info">
				<div className="row">
					<div className="col-md-4 text-light text-center t2">
					<h3 className='text-dark'>About</h3>
						<p className="text-center" style={{fontSize:"25px"}}>
							welcome to Footer section here u will be 
							introduced to an amazing marvellous 
							handsome hunk developer Named as: <a href="/about" className='p1'> DEVENDRA</a>
						</p>
						<div className="container">
							<img src="./images/fb.png" className="pic1" alt="facebook"/>&nbsp;
							<img src="images/twitter.png" className="pic1" alt="twitter" />&nbsp;
							<img src="images/gmail.png" className="pic1" alt="gmail" />&nbsp;
							<img src="images/linkedin.png" className="pic1" alt="gmail" />&nbsp;
						</div>

					</div>
					<div className="col-md-4 text-light text-center t2">
						<h3 className='text-dark'>My account</h3>
						<div><a href="/cart" className="p1" style={{fontSize:"25px"}}>Cart</a></div>
						<div><a href="/ulogin"style={{fontSize:"25px"}} className="p1">Login</a></div>
						<div><a href="usignup"  className="p1">Create Account</a></div>
					</div>
					
					<div className="col-md-4 text-light t2">
						<h3 className='text-dark'>Contacts</h3>
						<p className="fa fa-map-marker ">&nbsp;Nh 24,Sitapur Road,Lucknow</p><br></br>
						<p className="fa fa-phone"> +91 7398043147</p><br></br>
						<p className="fa fa-envelope"> devendramishra0204@gmail.com</p>
					</div>
				</div>
			</div>
			<div className="container-fluid bg-dark text-light text-center p-4">
				MADE BY:DEVENDRA
			</div>
		</>
	)
}
export default Header
export { Footer }