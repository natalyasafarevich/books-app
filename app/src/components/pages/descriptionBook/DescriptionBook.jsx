import "./DescriptionBook.scss";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export function DescriptionBook() {
	return (
		<div className="desc-book">
			<p className="desc-book__title">Mastering Azure API Management</p>
			<div className="desc-book__container">
				<div className="desc-book__preview">
					<div className="desc-book__box">
						<img className="desc-book__img" src="" alt="book img" />
					</div>
					<div className="desc-book__rating">
						<Rating
							name="half-rating-read"
							defaultValue={3}
							precision={0.5}
							readOnly
						/>{" "}
					</div>
					<div className="desc-book__btns">
						<a href="/" className="desc-book__btn desc-book__btn_buy">
							buy
						</a>
						<a href="/" className="desc-book__btn desc-book__btn_preview">
							preview
						</a>
					</div>
				</div>

				<div className="desc-book__info">
					<p className="desc-book__desc-text">Information</p>

					<p className="desc-book__text">
						<span>price</span> $49.99
					</p>

					<p className="desc-book__text">
						<span>author</span> Sven Malvik
					</p>
					<p className="desc-book__text">
						<span>Published</span> 2022
					</p>
					<p className="desc-book__text">
						<span>Pages</span> 266
					</p>
					<p className="desc-book__text">
						<span>Language</span> English
					</p>
					<p className="desc-book__text">
						<span>Format</span> Paper book / ebook (PDF)
					</p>
					<p className="desc-book__desc-text">Description</p>
					<p className="desc-book__desc">
						An application running in the cloud can benefit from incredible
						efficiencies, but they come with unique security threats too. A DevOps
						team's highest priority is understanding those risks and hardening the
						system against them.Securing DevOps teaches you the essential techniques
						to secure your cloud ...
					</p>
				</div>
			</div>
		</div>
	);
}
