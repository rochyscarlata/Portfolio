import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
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
