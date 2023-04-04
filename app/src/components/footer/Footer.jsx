import "./Footer.scss";
import FooterMobile from "./footer-mobile/FooterMobile";

export default function Footer() {
	return (
		<>
		<footer className="footer">
			<div className="footer__container">
				<p className="footer__title">
					information was taken from:
					<a href="http://gutendex.com/">Gutendex</a>
				</p>
			</div>
		</footer>
		<FooterMobile/>
		</>
	);
}
