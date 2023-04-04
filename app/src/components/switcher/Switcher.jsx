import { useDispatch, useSelector } from "react-redux";
import "./Switcher.scss";
import { setThemeDark, setThemeLight } from "../../store/theme/actions";	
import { useEffect } from "react";

export default function Switcher() {
	const dispatch = useDispatch();
	const theme = useSelector((state) => state.theme.isLight);

	useEffect(() => {
		localStorage.setItem("isLigthTheme", theme);
		if (theme) {
			document.querySelector('.swiper').checked = true
			dispatch(setThemeLight());
		} else {
			dispatch(setThemeDark());
		}
	}, [theme]);

	const changeTheme = (e) => {
		if (theme) {
			dispatch(setThemeDark());
		} else {
			dispatch(setThemeLight());
		}
	};
	return (
		<div className="mobile-menu">
				<label className="switch">
					<input className="swiper" type="checkbox" onChange={changeTheme}/>
					<span className="slider round"></span>
				</label>
			</div>
	);
}
