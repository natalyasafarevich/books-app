import { Link, NavLink } from "react-router-dom";
import "./FooterMobile.scss";

export default function FooterMobile() {
	if (window.innerWidth < 768) {
		return (
			<div className="footer-mobile">
				<div className="footer-mobile__container">
					<NavLink
						activeClass="active"
						to={`/`}
						className="footer-mobile__item footer-mobile__item_home ">
						Home
					</NavLink>
					<NavLink
						to={`/explore`}
						activeClass="active"
						className="footer-mobile__item footer-mobile__item_search">
						Explore
					</NavLink>
					<NavLink
						activeClass="active"
						to={`/favorite`}
						className="footer-mobile__item footer-mobile__item_favorite">
						Favorite
					</NavLink>
				</div>
			</div>
		);
	}
}
