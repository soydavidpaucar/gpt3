import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
	return (
		<div className="header section--padding" id="home">
			<div className="header__content">
				<h1 className="gradient-text">Let's Build Something Amazing with GPT-3 OpenAI</h1>
				<p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence
				   way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
				
				<div className="header__content--input">
					<input type="email" placeholder="Your Email Address" />
					<button type="button">Get Started</button>
				</div>
				
				<div className="header__content__people">
					<img src={people} alt="People" />
					<p>1,600 people requested access a visit in last 24 hours</p>
				</div>
			</div>
			
			<div className="header__image">
				<img src={ai} alt="AI" />
			</div>
		</div>
	);
};

export default Header;