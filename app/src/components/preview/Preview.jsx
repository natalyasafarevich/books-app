import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import "./Preview.scss";

const theme = createTheme({
	palette: {
		primary: {
			main: "#fff",
		},
	},
});
export function Preview() {
	return (
		<ThemeProvider theme={theme}>
			<div className="preview">
				<div className="preview__container">
					<div className="preview__text">
						<p className="preview__title">
							Read <span>Books </span> Online
						</p>
						<p className="preview__desc">
							Let you read books online without leaving website
						</p>
					</div>
					<div className="preview__image"></div>
				</div>
				<div className="preview__info">
					<div className="preview__item">
						<MenuBookOutlinedIcon color="primary" />
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}
