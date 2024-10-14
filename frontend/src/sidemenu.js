
import './App.css'
const Sidemenu = () => {
	return (
		<>

			<div className="col-md-2 bg-dark text-light">
				<h2 className="text-light p2">Dashboard</h2>
				<h4 className="p1"><span style={{ color: "red" }}>E</span>-SHOP</h4>
				<hr className="text-light" />
				<div id="accordion">

					<div className="card">
						<div className="card-header">
							<a class="btn" data-bs-toggle="collapse" href="#m1">
								Master edit
							</a>
						</div>
						<div id="m1" className="collapse show" data-bs-parent="#accordion">
							<div class="card-body">
								<ul>
									<li>category</li>
									<li>product</li>
								</ul>
							</div>
						</div>
					</div>



					<div className="card">
						<div className="card-header">
							<a class="collapsed btn" data-bs-toggle="collapse" href="#m2">
								VIEW ORDER
							</a>
						</div>
						<div id="m2" className="collapse" data-bs-parent="#accordion">
							<div className="card-body">
								<ul>
									<li>TRACK NO OF ORDERS</li>
									<li>TRACK Product avl</li>
								</ul>
							</div>
						</div>
					</div>

				</div>
			</div>



		</>
	)

}


export default Sidemenu
