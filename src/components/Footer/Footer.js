import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
        <path
          fill="#3c2a96"
          fill-opacity="1"
          d="M0,288L48,282.7C96,277,192,267,288,234.7C384,203,480,149,576,149.3C672,149,768,203,864,202.7C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <footer className="page-footer font-big  pt-4">
        <div className="container">
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a className="btn-floating btn-fb mx-1">
                <i className="fab fa-facebook-f"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-tw mx-1">
                <i className="fab fa-twitter"> </i>
              </a>
            </li>

            <li className="list-inline-item">
              <a className="btn-floating btn-li mx-1">
                <i className="fab fa-linkedin-in"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-dribbble mx-1">
                <i className="fab fa-dribbble"> </i>
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-copyright text-center py-3">
          © 2021 Copyright:
          <a href="/"> Rosarioscarlatadev.com</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
