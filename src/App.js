import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
function App() {
	return (
		<Router>
			<Route exact path="/auth/login" component={Login} />

			<Route exact path="/auth/register" component={Register} />
			<Route exact path="/home" component={Home} />
			<Route exact path="/profile" />
			<Route exact path="/skill" />
			<Route exact path="/master-skill" />
		</Router>
	);
}

export default App;
