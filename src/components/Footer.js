import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-section">
          <h3>About Us</h3>

          <p>
            Your one-stop shop for all kinds of books.
            Explore, read, and enjoy!
          </p>
        </div>

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/shop">Shop</a>
            </li>

            <li>
              <a href="/contact">Contact</a>
            </li>

            <li>
              <a href="/privacy">
                Privacy Policy
              </a>
            </li>
          </ul>

        </div>

        <div className="footer-section">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="https://facebook.com">
              <i className="fab fa-facebook"></i>
            </a>

            <a href="https://twitter.com">
              <i className="fab fa-twitter"></i>
            </a>

            <a href="https://instagram.com">
              <i className="fab fa-instagram"></i>
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2025 My Bookstore.
          All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
