import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header, { Footer } from './shop';
import './home.css';

const CountdownTimer = () => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const nextNoon = new Date();

        nextNoon.setHours(24, 0, 0, 0); // Set to 12:00:00 PM today

        if (now >= nextNoon) {
            // If past noon, set it for tomorrow
            nextNoon.setDate(nextNoon.getDate() + 1);
        }

        const diff = nextNoon - now;

        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        return { hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="timer">
            <span className="time-segment">{String(timeLeft.hours).padStart(2, '0')}</span>:
            <span className="time-segment">{String(timeLeft.minutes).padStart(2, '0')}</span>:
            <span className="time-segment">{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
    );
};

const Home = () => {
    // Sample categories data
    const categories = [
        { id: 1, name: 'Electronics', icon: 'fa fa-laptop', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
        { id: 2, name: 'Fashion', icon: 'fa fa-male', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80' },
        { id: 3, name: 'Home & Kitchen', icon: 'fa fa-home', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80' },
        { id: 4, name: 'Beauty', icon: 'fa fa-female', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
        { id: 5, name: 'Books', icon: 'fa fa-book', image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80' },
        { id: 6, name: 'Toys', icon: 'fa fa-gamepad', image: 'https://images.unsplash.com/photo-1558877387-07dfd9d0e5f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' }
    ];

    // Sample products data
    const products = [
        {
            id: 1,
            name: 'SAMSUNG S24 ULTRA',
            price: 120499,
            image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-5g-sm-s928-0.jpg',
            discount: 20
        },
        {
            id: 2,
            name: 'Sony WH-1000XM4',
            price: 29990,
            image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            discount: 15
        },
        {
            id: 3,
            name: 'Apple Watch Series 8',
            price: 45900,
            image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            discount: 10
        },
        {
            id: 4,
            name: 'MacBook Pro M2',
            price: 159900,
            image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80',
            discount: 25
        }
    ];

    return (
        <>
            <Header />
            <div className="home-page">
                {/* Hero Banner */}
                <div className="hero-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="category-sidebar">
                                    <h3>Categories</h3>
                                    <ul className="category-list">
                                        {categories.map(category => (
                                            <li key={category.id}>
                                                <Link to={`/category/${category.id}`}>
                                                    <i className={category.icon}></i>
                                                    {category.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="hero-slider">
                                    <div className="hero-content">
                                        <h1 className="mb-3 flow-text">Sale 2025</h1>
                                        <p>Up to 70% off on all products</p>
                                        <button className="btn btn-primary">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Deals of the Day */}
                <section className="deals-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Deals of the Day</h2>
                            <div className="timer-container">
                                <span className="timer-label">Ends in:</span>
                                <CountdownTimer />
                            </div>
                        </div>
                        <div className="row">
                            {products.map(product => (
                                <div className="col-md-3" key={product.id}>
                                    <div className="product-card">
                                        <div className="product-badge">{product.discount}% off</div>
                                        <img src={product.image} alt={product.name} />
                                        <div className="product-info">
                                            <h3>{product.name}</h3>
                                            <div className="price">
                                                <span className="original-price">₹{product.price}</span>
                                                <span className="discounted-price">
                                                    ₹{product.price - (product.price * product.discount / 100)}
                                                </span>
                                            </div>
                                            <button className="btn btn-primary">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Categories */}
                <section className="featured-categories">
                    <div className="container">
                        <h2>Featured Categories</h2>
                        <div className="row">
                            {categories.map(category => (
                                <div className="col-md-2" key={category.id}>
                                    <div className="category-card" data-category={category.name.toLowerCase().replace(/\s+/g, '-')}>
                                        <div className="category-image" style={{ backgroundImage: `url(${category.image})` }}></div>
                                        <i className={category.icon}></i>
                                        <h4>{category.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trending Products */}
                <section className="trending-products">
                    <div className="container">
                        <h2>Trending Products</h2>
                        <div className="row">
                            {products.map(product => (
                                <div className="col-md-3" key={product.id}>
                                    <div className="product-card">
                                        <div className="product-badge">Trending</div>
                                        <img src={product.image} alt={product.name} />
                                        <div className="product-info">
                                            <h3>{product.name}</h3>
                                            <div className="price">
                                                <span className="original-price">₹{product.price}</span>
                                            </div>
                                            <button className="btn btn-primary">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Home;