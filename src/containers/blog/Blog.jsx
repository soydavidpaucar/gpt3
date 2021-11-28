import './blog.css';
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports';

const Blog = () => {
	return (
		<div className="blog section--padding" id="blog">
			<div className="blog__heading">
				<h1 className="gradient-text">A lot is happening, We are blogging about it.</h1>
			</div>
			
			<div className="blog__container">
				<div className="blog__container__groupA">
					<Article imgUrl={blog01} date="Sep 6, 2021"
					         title="GPT-3 and Open AI is the future. Let us explore how it is?" />
				</div>
				<div className="blog__container__groupB">
					<Article imgUrl={blog02} date="Sep 6, 2021"
					         title="GPT-3 and Open AI is the future. Let us explore how it is?" />
					<Article imgUrl={blog03} date="Sep 6, 2021"
					         title="GPT-3 and Open AI is the future. Let us explore how it is?" />
					<Article imgUrl={blog04} date="Sep 6, 2021"
					         title="GPT-3 and Open AI is the future. Let us explore how it is?" />
					<Article imgUrl={blog05} date="Sep 6, 2021"
					         title="GPT-3 and Open AI is the future. Let us explore how it is?" />
				</div>
			</div>
		</div>
	);
};

export default Blog;