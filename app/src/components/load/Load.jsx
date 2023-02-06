import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function Load() {
	const load = useSelector((state) => state.loading.isLoading);
	if (load) {
		return (
			<Box sx={{ width: "100%" }}>
				<LinearProgress />
			</Box>
		);
	}
}
