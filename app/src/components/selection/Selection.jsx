import AppsIcon from "@mui/icons-material/Apps";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import  "./Selection.scss";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Selection() {


	const handleClick = (e) => {
		document.querySelector(".results-search__row").classList.toggle("column");
		document.querySelectorAll('.selection__item').forEach(item=>item.classList.remove('active'));
		e.target.classList.toggle("active");
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
