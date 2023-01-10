import "./Header.scss";

// library.add(fab, faCheckSquare, faCoffee)
export function Header() {
	const preventDefaultLink = (e) => {
		e.preventDefault();
	};
	return (
		<header className="header">
			<div className="header__container">
				<a href="/home" onClick={preventDefaultLink} className="header__logo"></a>
				<div className="header__content">
					<ul className="header__list">
						<li className="header__item">
							<a
								href="/home"
								onClick={preventDefaultLink}
								className="header__link header__link_active">
								Home
							</a>
						</li>
						<li className="header__item">
							<a href="/home" onClick={preventDefaultLink} className="header__link">
								About
							</a>
						</li>
						<li className="header__item">
							<a href="/home" onClick={preventDefaultLink} className="header__link">
								Pages
							</a>
						</li>
						<li className="header__item">
							<a
								href="/basket"
								onClick={preventDefaultLink}
								className="header__link ">
								Contact Us
							</a>
						</li>
						<li className="header__item">
							<a
								href="/home"
								onClick={preventDefaultLink}
								className="header__basket"></a>
						</li>
						<li className="header__item">
							<input type="text" className="header__search" placeholder="search"/>
						</li>
						
					</ul>
				</div>
			</div>
		</header>
	);
}
