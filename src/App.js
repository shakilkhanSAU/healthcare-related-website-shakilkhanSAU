import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import SingleService from './pages/Services/SingleService/SingleService';
import Login from './pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Footer from './pages/Shared/Footer/Footer';
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import NotFound from './pages/NotFound/NotFound';
import UserDetails from './pages/UserDetails/UserDetails';


function App() {
	return (
		<div>
			<AuthProvider>
				<BrowserRouter>
					<Header></Header>
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route exact path="/home">
							<Home></Home>
						</Route>
						<PrivateRoute exact path="/services/:serviceId">
							<SingleService></SingleService>
						</PrivateRoute>
						<Route exact path="/login">
							<Login></Login>
						</Route>
						<Route exact path="/contact">
							<ContactUs></ContactUs>
						</Route>
						<Route exact path="/about">
							<AboutUs></AboutUs>
						</Route>
						<Route exact path="/user">
							<UserDetails></UserDetails>
						</Route>
						<Route path="*">
							<NotFound></NotFound>
						</Route>
					</Switch>
					<Footer></Footer>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
