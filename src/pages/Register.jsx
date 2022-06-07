import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
// import { createUsers } from "../actions";
// import { JSONFile, Low } from "lowdb";

export default function Register() {
	const history = useHistory();
	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [bod, setBod] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isError, setError] = useState(false);
	const [message, setMessage] = useState("");

	const userCreated = async (event) => {
		event.preventDefault();
		try {
			for (let id = 0; id < 1; id++) {
				await axios.post("http://localhost:3000/profile", {
					id: id,
					username: username,
					name: name,
					address: address,
					password: password,
					bod: bod,
					email: email,
				});
				return history.push("/auth/login");
			}
		} catch (error) {
			new Error(error);
		}
	};

	return (
		<main className="auth">
			<div className="auth__form">
				<h2>Register</h2>
				<form onSubmit={userCreated}>
					<div className="child-form">
						<label htmlFor="username">Username</label>
						<input
							className="input__form"
							type="text"
							name="username"
							id="username"
							placeholder="Username"
							onChange={(event) => setUsername(event.target.value)}
						/>
					</div>
					<div className="child-form">
						<label htmlFor="name">name</label>
						<input
							className="input__form"
							type="text"
							name="name"
							id="name"
							placeholder="Name"
							onChange={(event) => setName(event.target.value)}
						/>
					</div>
					<div className="child-form">
						<label htmlFor="address">Address</label>
						<input
							className="input__form"
							type="text"
							name="address"
							id="address"
							placeholder="Name"
							onChange={(event) => setAddress(event.target.value)}
						/>
					</div>
					<div className="child-form">
						<label htmlFor="bod">Birth Of Day</label>
						<input
							className="input__form"
							type="date"
							name="bod"
							id="bod"
							placeholder="Name"
							onChange={(event) => setBod(event.target.value)}
						/>
					</div>
					<div className="child-form">
						<label htmlFor="email">email</label>
						<input
							className="input__form"
							type="email"
							name="email"
							id="email"
							placeholder="Username"
							onChange={(event) => setEmail(event.target.value)}
						/>
					</div>
					<div className="child-form">
						<label htmlFor="password">Password</label>
						<input
							className="input__form"
							type="text"
							name="password"
							id="password"
							placeholder="Username"
							onChange={(event) => setPassword(event.target.value)}
						/>
					</div>
					{isError ? <p>{message}</p> : message}
					<hr />
					<button type="submit">Register</button>
				</form>
			</div>
		</main>
	);
}
