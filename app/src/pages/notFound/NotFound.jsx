import ButtonBack from "../../components/buttons/button-back/ButtonBack";
import "./NotFound.scss";

export default function NotFound() {
	return (
		<div className="not-found">
			<ButtonBack />
			<div className="not-found__container">
				<div className="not-found__img"></div>

				<div className="not-found__info">
					<p className="not-found__title">Oops, This Page Could Not Be Found </p>
					<p className="not-found__desc">
						The page you are looking for might have been removed, had its name
						changed, or is temporarily unavailable.
					</p>
				</div>
			</div>
		</div>
	);
}
