import './brand.css';
import {atlassian, dropbox, google, shopify, slack} from './imports';

const Brand = () => {
	return (
		<div className="brand section--padding">
			<div>
				<img src={atlassian} alt="Google Image" />
			</div>
			<div>
				<img src={google} alt="Google Image" />
			</div>
			<div>
				<img src={slack} alt="Slack Image" />
			</div>
			<div>
				<img src={dropbox} alt="Dropbox Image" />
			</div>
			<div>
				<img src={shopify} alt="Shopify Image" />
			</div>
		</div>
	);
};

export default Brand;