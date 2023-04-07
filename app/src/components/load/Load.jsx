import { useDispatch, useSelector } from "react-redux";
import "./Loading.scss";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { ScrollToTop } from "../../helper/ScrollToTop";

export default function Load() {
	const load = useSelector((state) => state.loading.isLoading);
	useEffect(() => {
		if (load) {
			document.querySelector("html").classList.add("overflow-hidden");
			ScrollToTop();
			return;
		}

		document.querySelector("html").classList.remove("overflow-hidden");
	}, [load]);
	if (load) {
		return (
			<div className="loading">
				<div className="loading__container"></div>
			</div>
		
		);
	}
}
