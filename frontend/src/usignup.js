import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './style.css';

const USignup = () => {
	const [frm, setfrm] = useState({ "txtname": "", "txtmobile": "", "txtemail": "", "txtpassword": "", "txtcpassword": "" });
	const jump = useNavigate();
	const fun1 = (e) => {
		setfrm({ ...frm, [e.target.id]: e.target.value });
	}
	const saverecord = async () => {
		if (frm.txtname.trim() === "") {
			alert("Please enter name");
		}
		else if (frm.txtmobile.trim() === "") {
			alert("Please enter mobile");
		}
		else if (frm.txtemail.trim() === "") {
			alert("Please enter email");
		}
		else if (frm.txtpassword.trim() === "") {
			alert("Please enter password");
		}
		else if (frm.txtcpassword.trim() === "") {
			alert("Please enter confirm password");
		}
		else if (frm.txtpassword.trim() !== frm.txtcpassword) {
			alert("Both password must be same");
		}
		else {
			const rec = await fetch("http://localhost:7000/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name: frm.txtname, mobile: frm.txtmobile, email: frm.txtemail, password: frm.txtpassword })
			});
			const data = await rec.json();
			if (data.msg === "Saved") {
				alert("Thanks for creating account");
				jump("/ulogin");
			}
			else {
				alert(data.msg);
			}
		}
	}
	const Cancel=()=>{
		jump("/");
	}
	return (
		<>
			<div className="a2 bg-dark text-light text-center">
				<h1><span className="text-danger">C</span>reate <span className="text-info">N</span>ew <span className="text-warning" >A</span>ccount</h1>
				<div className="form-group">
					<label>Name</label>
					<input type="text" id="txtname" onChange={fun1} className="form-control inp" />
				</div>
				<div className="form-group">
					<label>Mobile</label>
					<input type="text" id="txtmobile" onChange={fun1} className="form-control inp" />
				</div>
				<div className="form-group">
					<label>Email</label>
					<input type="text" id="txtemail" onChange={fun1} className="form-control inp" />
				</div>
				<div className="form-group">
					<label>Password</label>
					<input type="password" id="txtpassword" onChange={fun1} className="form-control inp" />
				</div>
				<div className="form-group">
					<label>Confirm Password</label>
					<input type="password" id="txtcpassword" onChange={fun1} className="form-control inp" />
				</div>
				<div className="form-group">
					<br />
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<button className="btn btn-success" onClick={saverecord}>Create account</button></div>
							<div className="col-md-6">
								<button className="btn btn-danger" onClick={Cancel}>Cancel</button></div>
						</div>
					</div>
					<br />

					<br />
					<button className="btn btn-info">
						<Link to="/ulogin" className="LOGIN">ALREADY A CUSTOMER, LOGIN HERE</Link></button>
				</div>
			</div>
		</>
	);
}
export default USignup;