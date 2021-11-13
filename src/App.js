import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers';
import {Brand, CTA, Navbar} from './components';

const App = () => {
	return (
		<div className="app">
			<div className="app--gradient-bg">
				<Navbar />
				<Header />
			</div>
			
			<Brand />
			<WhatGPT3 />
			<Features />
			<Possibility />
			<CTA />
		</div>
	);
};

export default App;