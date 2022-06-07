import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<header>
			<nav>
				<div>
					<Link to="/home">Home</Link>
				</div>
				<div>
					<Link to="/profile">User Profile</Link>
				</div>
				<div>
					<span>Master</span>
				</div>
			</nav>
		</header>
	);
}
