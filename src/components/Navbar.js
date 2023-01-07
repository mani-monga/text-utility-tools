import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg sticky-top bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item px-2">
              <Link className="nav-a active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-a" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className="btn-group me-2" role="group" aria-label="First group">
            <button type="button" onClick={() => { props.togglemode('primary') }} className="btn btn-primary py-3 herobtn"></button>
            <button type="button" onClick={() => { props.togglemode('success') }} className="btn btn-success py-3 herobtn"></button>
            <button type="button" onClick={() => { props.togglemode('warning') }} className="btn btn-warning py-3 herobtn"></button>
            <button type="button" onClick={() => { props.togglemode('info') }} className="btn btn-info py-3 herobtn"></button>
            <button type="button" onClick={() => { props.togglemode('danger') }} className="btn btn-danger py-3 herobtn"></button>

          </div>
          <form className="d-flex px-3">
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" onClick={() => { props.togglemode('null') }} id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Title Here',
  aboutText: 'AboutMe'
}