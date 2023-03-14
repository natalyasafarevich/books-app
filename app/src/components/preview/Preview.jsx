// import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
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
			<div className="preview ">
				<div className="preview__container">
					<div className="preview__text">
						<p className="preview__title " >
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
						<div className="preview__box">
							<MenuBookOutlinedIcon fontSize="large" color="primary" />
						</div>
						<p>
							Read books Online
							<span>Over 7.000 of books</span>
						</p>
					</div>
					<div className="preview__item">
						<div className="preview__box">
							<TranslateOutlinedIcon fontSize="large" color="primary" />
						</div>

						<p>
							books on different languages
							<span>ALL ACROSS THE WORLD</span>
						</p>
					</div>
					<div className="preview__item">
						<div className="preview__box">
							<FavoriteOutlinedIcon fontSize="large" color="primary" />
						</div>

						<p>
							Add to favorites
							<span>Not to lose books</span>
						</p>
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}
