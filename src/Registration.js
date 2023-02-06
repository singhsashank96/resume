import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
function Registration() {
  return (
    <div>
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
                <Link to="/Login">login</Link>
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
        <div className="">
          <form>
            <div class="form-row text-center  ">
              <div class="form-group col-md-8 mx">
                <input
                  type="text"
                  class="form-control"
                  id=""
                  placeholder="Name"
                />
              </div>
            </div>
            <br />
            <div class="form-row text-center  ">
              <div class="form-group col-md-8">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <br />
              <div class="form-group col-md-8">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="form-group col-md-8">
              <label for="inputAddress"></label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Present Address"
              />
            </div>
            <div class="form-group col-md-8">
              <label for="inputAddress2"></label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Permanent address"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity"></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputCity"
                  placeholder="city"
                />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState"></label>
                <select
                  id="inputState"
                  class="form-control"
                  placeholder="state"
                >
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip"></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputZip"
                  placeholder="zip"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
              </div>
            </div>
            <button type="submit" class="btn btn-secondry">
              Register Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
