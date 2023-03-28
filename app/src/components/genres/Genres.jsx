import { Link } from "react-router-dom";
import { info } from "../../helper/defaultInfo";
import Label from "../label/Label";
import "./Genres.scss";

export default function Genres() {
	const { items, label_info } = info.genres;

	return (
		<div className="wrapper">
			<div className="main">
				<div className="genres">
					<div className="genres__container">
						<Label info={label_info} />
						<div className="genres__row">
							{items.map((genres, index) => (
								<Link
									to={`search/topic/${genres.title.toLowerCase()}`}
									className="genres__item"
									key={index}
									style={{
										background: `center/cover no-repeat url(${genres.image_url})`,
									}}>
									<p className="genres__desc">
										{genres.title}
										<span>Browse Books</span>
									</p>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
