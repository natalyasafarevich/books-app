import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setThemeDark, setThemeLight } from "../../store/theme/actions";
import "./Theme.scss";

export default function Theme() {

	const dispatch = useDispatch();
	const theme = useSelector((state) => state.theme.isLight);
	
	useEffect(() => {
		localStorage.setItem("isLigthTheme", theme);
		if (theme) {
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
		<div className="theme">
			{(theme && <DarkModeIcon onClick={changeTheme} />) || (
				<DarkModeOutlinedIcon onClick={changeTheme} />
			)}
		</div>
	);
}
