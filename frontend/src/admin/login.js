/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../style.css"


const Login=()=>{
    const [frm,setfrm]=useState({"txtuname":"","txtpsw":""});
    const jmp=useNavigate();
    const fun1=(e)=>{
        setfrm({...frm,[e.target.id]:e.target.value})
    }
    const validate=async()=>{
        const rec=await fetch("https://shop-cip1-5.onrender.com/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({uname:frm.txtuname,psw:frm.txtpsw}),
            credentials:"include"
        });
        const data=await rec.json();

        if(data.msg==="Valid Users")
        {
            jmp("/dashboard");
        }
        else{
            alert(data.msg);
        }
    }
    return(
        <>
            <div className="container padd">
                <div className="row mt-5 ms-5" >
                    <div className="col-md-4 bg-dark text-light text-center">
                        <h1><a href="/" className="anchr">E-Shop</a></h1>
                        <h4>Login Panel</h4>
                    </div>
                    <div className="col-md-4" style={{boxShadow:"5px 5px 5px black"}}>
                        <div className="form-group">
                            <label>User Name</label>
                            <input type="text" id="txtuname" onChange={fun1} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" id="txtpsw" onChange={fun1} className="form-control" />
                        </div>
                        <div className="form-group"><br/>
                            <button type="button" onClick={validate} className="btn btn-dark text-light mb-2">Login</button>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;