import React,{useState} from 'react'
import { Link } from 'react-router-dom'




function LoginPage() {


   
  

  return (
    
      
      <div className="container ">
        <img
          className="imgreact"
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
        />
        <p className="text">
          {" "}
          SOME RANDOM TEXT,SOME RANDOM <br /> TEXT , SOME RANDOM TEXT,SOME
          RANDOM TEXT{" "}
        </p>
        <div className="login">
          <div className="loginbtns">
            <div className="active">
              <button className="btn2">
                <Link to="/">login</Link>
              </button>
            </div>
            <div className="active1">
              <button className="btn2">
                <Link to="/Loginpage">Registration</Link>
              </button>
            </div>
          </div>

          <br />
        </div>
        <div className='container'>
        <div className=" my-4 mx-4 ">
          <form>
            <div className="form-row text-center  mx-5 ">
              <div className="form-group col-md-8 mx-5">
                <input
                  type="text"
                  className="form-control spa mx-5"
                  id=""
                  placeholder="Name"
                  
                />
              </div>
            </div>
            <br />
            <div className="form-row text-center  mx-5">
              <div className="form-group col-md-8 mx-5">
                <input
                  type="email"
                  className="form-control mx-5"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <br />
              <div className="form-group col-md-8 mx-5">
                <input
                  type="password"
                  className="form-control mx-5"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
            
            <div className="form-group col-md-8 mx-5">
              <label for="inputAddress"></label>
              <input
                type="text"
                className="form-control mx-5"
                id="inputAddress"
                placeholder="Present Address"
              />
            </div>
            <div className="form-group col-md-8 mx-5">
              <label for="inputAddress2"></label>
              <input
                type="text"
                className="form-control mx-5"
                id="inputAddress2"
                placeholder="Permanent address"
              />
            </div>
            <div className="form-row mx-5">
              <div className="form-group col-md-5 mx-5">
                <label for="inputCity"></label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="city"
                />
              </div>
              <div className="form-group col-md-5 mx-1">
                <label for="inputState"></label>
                <select
                  id="inputState"
                  className="form-control mx-5"
                  placeholder="state"
                >
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-5 mx-2">
                <label for="inputZip"></label>
                <input
                  type="text"
                  className="form-control mx-5"
                  id="inputZip"
                  placeholder="zip"
                />
              </div>
            </div>
            <div className="form-group mx-5">
              <div className="form-check mx-5">
                <input
                  className="form-check-input my-2 mx-0"
                  type="checkbox"
                  id="gridCheck"
                />
              </div>
            </div>
            </div>
            <button type="submit" className="btn btn-secondry ">
              Register Me
            </button>
          </form>
        </div>
        </div>
      
    </div>
  )
}

export default LoginPage
