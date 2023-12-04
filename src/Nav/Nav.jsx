import React, { useEffect, useState } from "react";
import "./Nav.css";
import Netflix from "./netflix.png"


function Nav() {
    const [show, handleShow] = useState(false);
  useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else {
				handleShow(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

    return (
			<div className={`nav ${show && "nav__black"}`}>
				<img className="nav__logo" src={Netflix} alt="Netflix Logo" />
				<img
					className="nav__avatar"
					src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
					alt="Avatar logo"
				/>
				<div className="nav-text-btn">
					<h4>UNLIMITED TV SHOWS & MOVIES</h4>
					<a href="#">
						<button className="join-btn">JOIN NOW</button>
					</a>
					<a href="#">
						<button className="sign-btn">SIGN IN</button>
					</a>
				</div>
			</div>
		);
}

export default Nav;
