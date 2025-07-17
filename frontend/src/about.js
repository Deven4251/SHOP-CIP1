import Header, { Footer } from "./shop"
import React from 'react';
import './style.css';

const developers = [
	{
		name: 'DEVENDRA MISHRA',
		email: 'devendramishra0204@gmail.com',
		contact: '+91 7398043147',
		hobbies: "playing online games",
		intro: 'Passionate about creating elegant web solutions.',
	},
];

const About = () => {
	return (
		<>
			<Header />
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-12 mb-5">
						<div className="card bg-dark text-light p-5">
							<h1 className="display-4 text-center mb-4">About Our Platform</h1>
							<p className="lead text-center mb-5">
								Your premier destination for seamless online shopping
							</p>

							<div className="row mt-4">
								<div className="col-md-6">
									<div className="card bg-secondary text-light p-4 mb-4">
										<h3 className="text-danger mb-3 bg-light p-3 rounded">What We Offer</h3>
										<ul className="list-unstyled">
											<li className="mb-3">
												<h5 className="text-light">Extensive Product Range</h5>
												<p>Browse through our carefully curated selection of high-quality products across various categories.</p>
											</li>
											<li className="mb-3">
												<h5 className="text-light">Secure Shopping</h5>
												<p>Shop with confidence using our secure payment gateway and data protection measures.</p>
											</li>
											<li className="mb-3">
												<h5 className="text-light">User-Friendly Interface</h5>
												<p>Enjoy a smooth shopping experience with our intuitive and responsive design.</p>
											</li>
										</ul>
									</div>
								</div>

								<div className="col-md-6">
									<div className="card bg-secondary text-light p-4 mb-4">
										<h3 className="text-danger mb-3 bg-light p-3 rounded">Key Features</h3>
										<ul className="list-unstyled">
											<li className="mb-3">
												<h5 className="text-light">Smart Search</h5>
												<p>Find exactly what you're looking for with our advanced search functionality.</p>
											</li>
											<li className="mb-3">
												<h5 className="text-light">Real-time Updates</h5>
												<p>Stay informed with instant notifications about your orders and promotions.</p>
											</li>
											<li className="mb-3">
												<h5 className="text-light">Customer Support</h5>
												<p>Access our dedicated support team for any assistance you may need.</p>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="row mt-4">
								<div className="col-md-12">
									<div className="card bg-secondary text-light p-4">
										<h3 className="text-danger mb-3 bg-light p-3 rounded">
											Our Commitment
										</h3>
										<p className="lead">
											We are committed to providing an exceptional shopping experience by:
										</p>
										<ul className="list-unstyled">
											<li className="mb-2">• Ensuring product quality and authenticity</li>
											<li className="mb-2">• Maintaining competitive pricing</li>
											<li className="mb-2">• Offering reliable delivery services</li>
											<li className="mb-2">• Providing excellent customer service</li>
											<li className="mb-2">• Continuously improving our platform</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default About;
