import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Login() {
	const history = useHistory();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isError, setError] = useState(false);
	const [message, setMessage] = useState("");

	const userLogged = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.get("http://localhost:3000/login", {
				username,
				password,
			});
			const findUserIsSame = response.data.find((value) => {
				return value.username === username || value.password === password;
			});

			if (findUserIsSame === undefined) {
				// user tidak ada
				setError(true);
				setMessage("Akun tidak ditemukan");
				return false;
			} else {
				setError("false");
				alert("Berhasil Login!");
				setTimeout(() => {
					history.push("/home");
				}, []);
			}
		} catch (error) {
			new Error(error);
		}
	};

	return (
		<main className="auth">
			<div className="auth__form">
				<h2>Login</h2>
				<form onSubmit={userLogged}>
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
					<button type="submit" className="button__auth">
						Login
					</button>
					<hr />
					<Link to="/auth/register">
						<p className="auth__link">Register</p>
					</Link>
				</form>
			</div>
		</main>
	);
}
