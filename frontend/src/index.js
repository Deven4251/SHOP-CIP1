import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './about';
import Contact from './contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './product';
import AdminHome from './admin/adminhome';
import Category from './admin/category';
import Login from './admin/login';
import Adminproduct from './admin/adminproduct';
import ULogin from './ulogin';
import USignup from './usignup';
import Cart from './admin/cart';
import Home from './home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/about' element={<About />} />
				<Route exact path='/contact' element={<Contact />} />
				<Route exact path='/product' element={<Product />} />
				<Route exact path='/product/:id' element={<Product />} />
				<Route exact path='/ulogin' element={<ULogin />} />
				<Route exact path='/usignup' element={<USignup />} />
				<Route exact path='/cart' element={<Cart />} />
				<Route exact path='/admin' element={<Login />} />
				<Route exact path='/dashboard' element={<AdminHome />} />
				<Route exact path='/category' element={<Category />} />
				<Route exact path='/adminproduct' element={<Adminproduct />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);


reportWebVitals();