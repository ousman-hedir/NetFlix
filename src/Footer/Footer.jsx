import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__top">
				<h1>There’s even more to watch.</h1>
				<p>
					Netflix has an extensive library of feature films, documentaries,{" "}
					<br /> TV shows, anime, award-winning Netflix originals, and more.
					Watch as <br /> much as you want, anytime you want.
				</p>
				<button>JOIN NOW</button>
			</div>
			<div className="footer__content">
				<div className="footer__column">
					<h4>Questions? Contact us.</h4>
					<ul className="footer__list">
						<li>FAQ</li>
						<li>Investor Relations</li>
						<li>Privacy</li>
						<li>Speed Test</li>
					</ul>
				</div>
				<div className="footer__column">
					<h4>Help Center</h4>
					<ul className="footer__list">
						<li>Account</li>
						<li>Ways to Watch</li>
						<li>Corporate Information</li>
						<li>Netflix Originals</li>
					</ul>
				</div>
				<div className="footer__column">
					<h4>Media Center</h4>
					<ul className="footer__list">
						<li>Terms of Use</li>
						<li>Contact Us</li>
						<li>Legal Notices</li>
					</ul>
				</div>
				<div className="footer__column">
					<h4>Follow Us</h4>
					<ul className="footer__list">
						<li>Facebook</li>
						<li>Twitter</li>
						<li>Instagram</li>
						<li>LinkedIn</li>
					</ul>
				</div>
			</div>
			<div className="footer__bottom">
				<p>
					2023
					<span>
						<a target="_blank" href="http://ousmanhedir.com.et/">
							Ousman Hedir's <i className="fa-solid fa-heart"></i>
						</a>
					</span>
					Netflix React Clone Project
				</p>
			</div>
		</footer>
	);
};

export default Footer;
