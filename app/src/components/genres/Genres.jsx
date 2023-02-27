import Label from "../label/Label";
import genres_img_1 from "../../img/generes_1.png";
import genres_img_2 from "../../img/generes_2.png";
import genres_img_3 from "../../img/generes_3.png";
import genres_img_4 from "../../img/generes_4.png";
import genres_img_5 from "../../img/generes_5.png";

import "./Genres.scss";
import { Link } from "react-router-dom";

export default function Genres() {
	const info = {
		label: "Collections",
		title: "Genres",
		desc: `Reading books keeps you relax and helps reduce stress`,
	};

	const items = [
		{
			title: "psychology",
			image_url: genres_img_1,
			// url:''
		},
		{
			title: "Biography",
			image_url: genres_img_2,
		},
		{
			title: "Fantasy",
			image_url: genres_img_3,
		},
		{
			title: "Detectives",
			image_url: genres_img_4,
		},
		{
			title: "Gardening",
			image_url: genres_img_5,
		},
		{
			title: "Finance",
			image_url: genres_img_2,
		},
		{
			title: "History",
			image_url: genres_img_2,
		},
		{
			title: "Horror",
			image_url: genres_img_2,
		},
	];
	return (
		<div className="wrapper">
			<div className="main">
				<div className="genres">
					<div className="genres__container">
						<Label info={info} />

						<div className="genres__row">
							{items.map((genres, index) => (
								<Link
									to={`search/${genres.title.toLowerCase()}`}
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
