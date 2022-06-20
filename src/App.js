import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Services from './components/Services';
import About from './components/About';
import Location from './components/Location';
import Footer from './components/Footer';
import Menu from './templates/Menu';

const App = () => {
	return (
		<BrowserRouter>
			<main className='' id='top'>
				<Header />
				<Switch>
					<Route exact path='/'>
						<Hero />
						<Gallery />
						<Services />
						<About />
					</Route>
					<Route exact path='/services'>
						<Menu />
					</Route>
				</Switch>
				<Location />
			</main>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
