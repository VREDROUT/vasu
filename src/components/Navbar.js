import { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class NavBar extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
        <div > 
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-info mb-3">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              My-HospitalApp
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                
                <li className="nav-item">
                  <Link className="nav-link" to="/doctors">
                    Doctors
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/patients">
                    Patients
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/hospitalStaff">
                    HospitalStaff
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/appointment">
                    Appointments
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/department">
                    Departments
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sign-up">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                    
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="containerFluid">
              <div className="row">
                  <div className="col-lg-12">
                    <Outlet />
                </div>
            </div>
        </div>
      </div>
    );
  }
}