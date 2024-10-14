import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css"

const ULogin = () => {
	const [frm, setfrm] = useState({ "txtemail": "", "txtpassword": "" });
	const jump = useNavigate();
	const fun1 = (e) => {
		setfrm({ ...frm, [e.target.id]: e.target.value })
	}
	const funlogin = async () => {
		const rec = await fetch("http://localhost:7000/signuplog", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email: frm.txtemail, password: frm.txtpassword }),
			credentials: "include"
		});
		const data = await rec.json();
		if (data.msg === "Valid User") {
			jump("/product")
		}
		else {
			alert(data.msg);
		}
	}
	const Cancel = () => {
		jump("/product")
	}
	return (
		<>
			<div className="a2 bg-dark text-light">
				<div className="form-group">
					<h1 className="text-center text-danger">U<span className="text-light">ser <span className="text-info">L</span>ogin</span></h1>

					<label className=" p-2">Email</label>
					<input type="text" id="txtemail" onChange={fun1} className="form-control inp text-center" placeholder="enter your email id" />

				</div>
				<div className="form-group">
					<label>Password</label>
					<input type="password" id="txtpassword" onChange={fun1} className="form-control text-center inp" placeholder="enter the password" />
				</div>
				<div className="form-group m-2 p-2">
					<br />
					<div className="container">
						<div className="row">

							<div className="col-md-4 text-center"><button className="btn btn-info" onClick={funlogin}>Login</button>
							</div>
							<div className="col-md-4 text-center">
								<button className="btn btn-success "><Link to="/usignup" className="LOGIN1">New Account</Link></button></div>

							<div className="col-md-4 text-center">
								<button className="btn btn-danger " onClick={Cancel}>Cancel</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default ULogin;