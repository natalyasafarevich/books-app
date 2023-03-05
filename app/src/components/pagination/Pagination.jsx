import { useDispatch, useSelector } from "react-redux";
import {
	setPaginationCount,
	setPaginationNumber,
} from "../../store/pagination/actions";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect } from "react";

export default function Paginationss({ state }) {
	const dispatch = useDispatch();

	const result = useSelector((state) => state.pagination);
	const items_pagination = [];

	for (let i = 1; i <= result.result; i++) {
		items_pagination.push(i);
	}
	useEffect(() => {
		dispatch(setPaginationCount(state.count));
	}, [state.count]);

	const paginationNumber = (e) => {
		if (!e.target.closest("button")) {
			return;
		}
		dispatch(setPaginationNumber(e.target.textContent));
	};

	return (
		<Stack spacing={2}>
			<Pagination
				onClick={paginationNumber}
				count={items_pagination.length}
				renderItem={(item) => (
					<PaginationItem
						slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
						{...item}
					/>
				)}
			/>
		</Stack>
	);
}
