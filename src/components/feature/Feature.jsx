import './feature.css';

const Feature = ({title, text}) => {
	return (
		<div className="whatgpt3__features__container__feature">
			<div className="whatgpt3__features__container__feature--title">
				<div />
				<h1>{title}</h1>
			</div>
			<div className="whatgpt3__features__container_feature--text">
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Feature;