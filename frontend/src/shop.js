import './style.css'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { Cookies, useCookies } from 'react-cookie';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header-content">
					<div className="logo">
						<Link to="/">
							<h1>ShopCip</h1>
						</Link>
					</div>
					<div className="search-bar">
						<input type="text" placeholder="Search for products..." />
						<button><i className="fas fa-search"></i></button>
					</div>
					<nav className="main-nav">
						<ul>
							<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
							<li><Link to="/product"><i className="fa fa-shopping-bag"></i> Products</Link></li>
							<li><Link to="/about"><i className="fa fa-info-circle"></i> About</Link></li>
							<li><Link to="/contact"><i className="fa fa-envelope"></i> Contact</Link></li>
						</ul>
					</nav>
					<div className="user-actions">
						<Link to="/cart" className="cart-icon">
							<i className="fa fa-shopping-cart"></i>
							<span className="cart-count">0</span>
						</Link>

					</div>
				</div>
			</div>
		</header>
	);
};

const Footer = () => {
	return (
		<footer className="footer mt-5">
			<div className="container-fluid">
				<div className="row py-5">
					<div className="col-md-4">
						<h4 className="text-light mb-4">Quick Links</h4>
						<ul className="list-unstyled">
							<li className="mb-2"><a href="/" className="text-light text-decoration-none">Home</a></li>
							<li className="mb-2"><a href="/about" className="text-light text-decoration-none">About Us</a></li>
							<li className="mb-2"><a href="/product" className="text-light text-decoration-none">Products</a></li>
							<li className="mb-2"><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
						</ul>
					</div>
					<div className="col-md-4">
						<h4 className="text-light mb-4">Customer Service</h4>
						<ul className="list-unstyled">
							<li className="mb-2"><a href="#" className="text-light text-decoration-none">Shipping Policy</a></li>
							<li className="mb-2"><a href="#" className="text-light text-decoration-none">Return Policy</a></li>
							<li className="mb-2"><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
							<li className="mb-2"><a href="#" className="text-light text-decoration-none">Terms of Service</a></li>
						</ul>
					</div>
					<div className="col-md-4">
						<h4 className="text-light mb-4">Contact Info</h4>
						<ul className="list-unstyled">
							<li className="mb-2 text-light">Nh 24, Sitapur Road, Lucknow</li>
							<li className="mb-2 text-light">+91 7398043147</li>
							<li className="mb-2 text-light">devendramishra0204@gmail.com</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="text-center py-3 border-top border-secondary">
							<p className="text-light mb-0">&copy; {new Date().getFullYear()} Shop-Cip. All rights reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Header
export { Footer }