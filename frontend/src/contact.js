import Header, { Footer } from "./shop"

const developers = [
	{
		name: 'DEVENDRA MISHRA',
		Work: 'software  developer',
		email: 'devendramishra0204@gmail.com',
		contact: '+91 73xxxxxxxx',
		hobbies: "playing online games",
		intro: 'Passionate about creating elegant web solutions.',
	},
];

const Contact = () => {
	return (
		<>
			<Header />
			<div>
				<marquee behavior="scroll" direction="up" scrollamount="3" className="marquee1 text-center">
					<img src="./images/logo.png" className="pic4" alt="#" />
					<img src="./images/logo.png" className="pic4" alt="#" />
					<img src="./images/logo.png" className="pic4" alt="#" />
					<img src="./images/logo.png" className="pic4" alt="#" />
					<img src="./images/logo.png" className="pic4" alt="#" />
					<img src="./images/logo.png" className="pic4" alt="#" />
					<img src="./images/logo.png" className="pic4" alt="#" />
					<img src="./images/logo.png" className="pic4" alt="#" />
					<img src="./images/logo.png" className="pic4" alt="#" />
					<img src="./images/logo.png" className="pic4" alt="#" />
					<img src="./images/logo.png" className="pic4" alt="#" />
					<img src="./images/logo.png" className="pic4" alt="#" />
					<img src="./images/logo.png" className="pic4" alt="#" />
					<img src="./images/logo.png" className="pic4" alt="#" />
				</marquee>
			</div>
			<div className="container">
				<div className="row ">
					<div className="col-md-4 bg-danger"><div className="about-container ">
						<div className="about-content bg-info">
							<h1><span className="text-danger">I</span>nfo <span className="text-warning"></span></h1>
							<div className="card-deck bg-danger">
								{developers.map((developer, index) => (
									<div className="card " key={index}>
										<div className="card-body">
											<h3 className="text-danger">Name:</h3>
											<h4 className="card-title">{developer.name}</h4>
											<p className="card-text"> {developer.Work}</p>
											<p className="card-text">{developer.hobbies}</p>
											<a>
												<button className="btn btn-warning">Know More</button>
											</a>
										</div>
									</div>
								))}
							</div>
						</div>
					</div></div>
					<div className="col-md-4 bg-warning"><div className="about-container" >
						<div className="about-content bg-info">
							<h1><span className="text-danger">P</span>hone <span className="text-warning">N</span>o</h1>
							<div className="card-deck bg-warning">
								{developers.map((developer, index) => (
									<div className="card" key={index}>
										<div className="card-body">

											<h3 className="card-text">{developer.contact}</h3>
											<a href={`callto:${developer.contact}`} className="btn btn-warning">
												Call
											</a>
										</div>
									</div>
								))}
							</div>
						</div>
					</div></div>
					<div className="col-md-4"><div className="about-container ">
						<div className="about-content bg-info">
							<h1><span className="text-light">M</span>ail <span className="text-light">T</span>0</h1>
							<div className="card-deck">
								{developers.map((developer, index) => (
									<div className="card" key={index}>
										<div className="card-body">
											<p className="card-text fa fa-envelope"> devendramishra0204@gmail.com</p>
											<br />
											<a href={`mailto:${developer.email}`} className="btn btn-warning">
												Contact
											</a>
										</div>
									</div>
								))}
							</div>
						</div>
					</div></div>

				</div>

			</div>
			<Footer />
		</>
	)
}
export default Contact