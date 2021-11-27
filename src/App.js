import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers';
import {Brand, CTA, Navbar} from './components';
import './App.css';

const App = () => {
	return (
		<div className="app">
			<div className="gradient-bg">
				<Navbar />
				<Header />
			</div>
			
			<Brand />
			<WhatGPT3 />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</div>
	);
};

export default App;