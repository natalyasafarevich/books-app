import AppsIcon from "@mui/icons-material/Apps";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import "./Selection.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { removeClass, toggleClass } from "../../helper/events";

export default function Selection() {
	const handleClick = (e) => {
		const row = document.querySelector(".results-search__row");
		toggleClass(row, "column");
		document
			.querySelectorAll(".selection__item")
			.forEach((item) => removeClass(item, "active"));
			toggleClass(e.target, "active");
	};

	return (
		<div className="selection">
			<div className="selection__container">
				<button className="selection__item active" onClick={handleClick}>
					<ViewHeadlineIcon />
				</button>
				<button className="selection__item " onClick={handleClick}>
					<AppsIcon />
				</button>
			</div>
		</div>
	);
}
